import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, Card, Container, Label } from 'reactstrap';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { TopUpSaldo } from 'api/saldo';
import { connect } from 'react-redux';
import { ViewSaldoTrainee } from 'api/saldo';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { validateTrainee } from 'api/trainee';
import { tokenAction } from 'actions/token';
import Footer from 'components/Footers/Footer';
import BlockLoading from 'react-loadingg/lib/BlockLoading';


export class CheckoutTopUp extends React.Component {
    state = { money: null, cardNumber: null, loading: false, confirPassword: null }

    onInputMoney = (event) => {
        try {
            this.setState({ money: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onChangeConfirmPassword = (event) => {
        this.setState({ confirPassword: event.target.value })
    }
    doTopUpEvent = async () => {
        if (this.state.money !== null) {
            try {
                const { value: email } = await Swal.fire({
                    title: "Please input your email",
                    input: 'email',
                    inputPlaceholder: 'Enter your email address'
                })
                const { value: password } = await Swal.fire({
                    title: "Please input your password",
                    input: 'password',
                    inputPlaceholder: 'Enter your Password',
                    inputAttributes: {
                        maxlength: 20,
                        autocapitalize: 'off',
                        autocorrect: 'off'
                    },
                })
                try {
                    const response = await validateTrainee(email, password);
                    const data = await response.json();
                    await this.props.tokenAction({ token: data.token })
                    if (response.status === 200) {
                        try {
                            await TopUpSaldo(this.state.cardNumber, this.props.userActiveReducer.traineeId, this.state.money, this.props.tokenReducer.token)
                            await Swal.fire("Thank your for Top-Up your acount :D")
                            await this.props.history.push({
                                pathname: "/protected/main-trainee"
                            })
                        } catch (error) {
                            Swal.fire("sorry there is an error")
                        }
                    } else {
                        Swal.fire("Sorry")
                    }
                } catch (error) {
                    Swal.fire("Sorry you input wrong data :(")
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            Swal.fire("Please input total balance you want Top-Up")
        }
    }


    componentDidMount = async () => {
        try {
            const response = await ViewSaldoTrainee(this.props.userActiveReducer.traineeId, this.props.tokenReducer.token)
            const data = await response.json();
            this.setState({ cardNumber: data.accountNumber })
        } catch (error) {
            console.log(error)
        }
    }



    useStyles = makeStyles(theme => ({
        appBar: {
            position: 'relative',
        },
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        stepper: {
            padding: theme.spacing(3, 0, 5),
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
    }));

    render() {
        return (
            <div>
                <div style={{ width: "100%", height: "852px" }}>
                    <MainNavbarTrainee />
                    <br></br>
                    <Card className="card-body" style={{ margin: "auto", marginTop: "190px", width: "800px", height: "530px", borderRadius: "1%", border: "1px solid #251EE3" }}>
                        <Container component="main" maxWidth="xs" style={{ marginTop: "35px" }}>
                            <CssBaseline />
                            <div className={this.useStyles.paper}>
                                <img src="https://library.kissclipart.com/20180831/qfw/kissclipart-%D8%A7%DB%8C%DA%A9%D9%88%D9%86-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%A8%D8%A7%D9%86%DA%A9%DB%8C-clipart-credit-card-4e476afc439d28f5.png" style={{ width: "100px", height: "100px", marginLeft: "320px" }} />
                                <h2 className="text-center" style={{ marginTop: "10px" }}><b>TOP UP</b></h2>
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
                                            <Label>Amount of Money</Label><b>
                                                <TextField variant="outlined" required fullWidth
                                                    onChange={this.onInputMoney} /></b>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Label>Card Number</Label><b>
                                                <TextField variant="outlined" required fullWidth
                                                    value={this.state.cardNumber} /></b>
                                            <Button color="primary mt-3" size="lg" className="btn btn-lg btn-block" onClick={this.doTopUpEvent}>Top up</Button>
                                        </Grid>
                                    </Grid>
                                    <br></br>
                                    <div>
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

const mapStateToProps = state => {
    return {
        userActiveReducer: state.userActive,
        tokenReducer: state.tokenReducer
    };
};
const mapDispatchToProps = {
    tokenAction: tokenAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutTopUp);
