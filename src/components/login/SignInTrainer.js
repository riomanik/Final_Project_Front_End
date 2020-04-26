import React from 'react';
import { Button, Card } from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import { authUser, changeUserSession } from "../../actions/user/index";
import { connect } from "react-redux";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Footer from 'components/Footers/Footer';
import { validateTrainer } from 'api/trainer';
import swal from 'sweetalert';
import BlockLoading from 'react-loadingg/lib/BlockLoading';
import { tokenAction } from 'actions/token';


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export class SignInTrainer extends React.Component {
    state = { email: "", password: "", loading: false, isTrueCaptcha: false }

    doLoginTrainer = async (event) => {
        event.preventDefault();
        await this.setState({ loading: true });
        try {
            const response = await validateTrainer(this.state.email, this.state.password);
            const data = await response.json();
            await this.props.changeUserSession(true);
            await this.props.authUser(data.trainerDetail);
            await this.props.tokenAction({ token: data.token })
            await swal("berhasil")
            this.props.history.push({
                pathname: '/protected/main-trainer'
            })
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
        } catch (error) {
            console.log(error)
            swal("Acount Tidak terdaftar")
        }
        await this.setState({ loading: false });
    }

    useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    onEmailInputChange = async (event) => {
        try {
            this.setState({ email: event.target.value });
        } catch (error) {
            console.log(error)
        }
    };

    onPasswordInputChange = async (event) => {
        try {
            this.setState({ password: event.target.value });
        } catch (error) {
            console.log(error)
        }
    };


    render() {
        return (
            <div>
                <div style={{ width: "100%", height: "852px" }}>
                    <ExamplesNavbar />
                    <br></br>
                    <Card className="card" style={{ margin: "auto", marginTop: "160px", width: "500px", height: "500px", borderRadius: "5%", border: "1px solid #251EE3" }}>
                        <Container component="main" maxWidth="xs" style={{ marginTop: "55px" }}>
                            <CssBaseline />
                            <div className={this.useStyles.paper}>
                                <img src="https://image.flaticon.com/icons/png/512/277/premium/277210.png" style={{ width: "100px", height: "100px", marginLeft: "140px" }} />
                                <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
                                </Typography>
                                <br>
                                </br>
                                <form className={this.useStyles.form} noValidate>
                                    <Grid container spacing={3}>
                                        {this.state.loading ?
                                            <div><BlockLoading /></div>
                                            : ""}
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth
                                                label="Email Address" name="email" autoComplete="email" onChange={this.onEmailInputChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth
                                                label="Password" type="password" onChange={this.onPasswordInputChange} />
                                        </Grid>
                                    </Grid>
                                    <br>
                                    </br>
                                    <div>
                                        <Button size="lg" className="btn btn-lg btn-block" onClick={this.doLoginTrainer} style={{ marginTop: "20px", backgroundColor: "#4287f5", border: "1px solid #4287f5" }}>
                                            Login
                                    </Button>
                                    </div>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Container>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = {
    authUser: authUser,
    changeUserSession: changeUserSession,
    tokenAction: tokenAction
};

export default connect(null, mapDispatchToProps)(SignInTrainer)