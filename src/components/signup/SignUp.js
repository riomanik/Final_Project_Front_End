import React from 'react';
import { Button } from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createTrainee } from "../../api/trainee/index";
import { connect } from 'react-redux'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import swal from 'sweetalert';
import { authUser } from 'actions/user';
import { changeUserSession } from 'actions/user';
import ReCAPTCHA from 'react-google-recaptcha';
import { imageProfile } from 'actions/image';
import BlockLoading from 'react-loadingg/lib/BlockLoading';
const recaptchaRef = React.createRef();



export class SignUp extends React.Component {
    state = { userFullName: null, userEmail: null, userPassword: null, userPasswordConfirm: null, userAddress: null, userPhoneNumber: null, isTrueCaptcha: false, loading: false }

    onChange = (event) => {
        try {
            this.setState({ isTrueCaptcha: event })
        } catch (error) {
            console.log(error)
        }
    }

    onInputUserFullNameChange = (event) => {
        try {
            this.setState({ userFullName: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onInputUserEmailChange = (event) => {
        try {
            this.setState({ userEmail: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onInputUserAddressChange = (event) => {
        try {
            this.setState({ userAddress: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onInputUserPasswordChange = (event) => {
        try {
            this.setState({ userPassword: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onInputUserPasswordConfirmChange = (event) => {
        try {
            this.setState({ userPasswordConfirm: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onInputUserPhoneNumberChange = (event) => {
        try {
            this.setState({ userPhoneNumber: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };

    onInputPhotoChange = async (event) => {
        try {
            await this.setState({
                fotoInput: event.target.files[0],
                loaded: 0
            })
            await this.props.imageProfile(null)
            this.doChangeSaveImage()
        } catch (error) {
            console.log(error)
        }
    }

    doUpdate = async () => {
        try {
            if (this.state.userEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                if (this.state.isTrueCaptcha !== false) {
                    if (this.state.userPassword === this.state.userPasswordConfirm) {
                        if (this.state.userEmail && this.state.userPassword && this.state.userFullName && this.state.userPhoneNumber && this.state.userAddress !== "") {
                            swal({
                                title: "Are you sure?",
                                text: "We will create your acount with this information!",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then(async (willDelete) => {
                                    await this.setState({ loading: true });
                                    if (willDelete) {
                                        const response = await createTrainee(this.state.userEmail, this.state.userPassword, this.state.userFullName, this.state.userPhoneNumber, this.state.userAddress)
                                        console.log(response)
                                        const data = response.json();
                                        console.log(data)
                                        swal("Confirmation link has been sent , Please Check your E-mail", {
                                        });
                                        this.props.history.push({
                                            pathname: '/'
                                        })
                                        await this.setState({ loading: false });
                                    } else {
                                        swal("that's okay , we will wait you :D");
                                    }
                                });
                        } else {
                            swal("Please enter full requiretments !!!")
                        }
                    } else {
                        swal("Please input the same password")
                    }
                } else {
                    swal("Please verified if you are human")
                }
            } else {
                swal("Please use valid Email")
            }
        } catch (error) {
            swal("Please check again")
        }
    }

    useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(10),
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
        }
    }));

    render() {
        return (
            <div>
                <div style={{ width: "100%", height: "930px" }}>
                    <br></br>
                    <ExamplesNavbar />
                    <div className="card" style={{ margin: "auto", marginTop: "65px", width: "500px", height: "820px", border: "solid 1px #251EE3", borderRadius: "2%" }}>
                        <Container component="main" maxWidth="xs" style={{ height: '72vh', marginTop: "-40px" }}>
                            <CssBaseline />
                            <div className={this.useStyles.paper}>
                                <Typography component="h1" variant="h5" style={{ marginLeft: "70px", marginTop: "70px" }}>
                                    <img src="https://gdmissionsystems.com/-/media/General-Dynamics/Suppliers/Images/Innovation-Sourcing-Network/signupiconlg.ashx?h=250&w=250&la=en&bc=ffffff&hash=FFE2342D528F4981599A67D3FF5BA87BF022E467" style={{ width: "100px", height: "100px" }} />
                                    <b>Sign Up</b>
                                </Typography>
                                <br></br>
                                <form className={this.useStyles.form} noValidate >
                                    <Grid container spacing={3} >
                                        {this.state.loading ? <BlockLoading /> : ""}
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth id="fullname" inputProps={{ maxLength: 50 }}
                                                label="Full name" name="fullname" autoComplete="fullname" onChange={this.onInputUserFullNameChange} validationOption={{ required: true }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth id="email" inputProps={{ maxLength: 50 }}
                                                label="Email Address" name="email" autoComplete="email" onChange={this.onInputUserEmailChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth name="password" inputProps={{ maxLength: 50 }}
                                                label="Password" type="password" id="password" autoComplete="current-password" onChange={this.onInputUserPasswordChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth name="Cpassword" inputProps={{ maxLength: 50 }}
                                                label="Confirm Password" type="password" id="Cpassword" autoComplete="current-Cpassword" onChange={this.onInputUserPasswordConfirmChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" required fullWidth id="address" inputProps={{ maxLength: 100 }}
                                                label="Address" name="address" autoComplete="address" onChange={this.onInputUserAddressChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField Type="number" variant="outlined" required fullWidth id="phoneNumber" inputProps={{ maxLength: 15 }}
                                                label="phoneNumber" name="phonenumber" autoComplete="phoneNumber" onChange={this.onInputUserPhoneNumberChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey="6Ldz8skUAAAAADe79PTUyWFdUDb3qexTNd2aae4Y"
                                                onChange={this.onChange}
                                                style={{ marginTop: "3px" }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <br></br>
                                    <Button color="primary" size="lg" className="btn  btn-lg btn-block" onClick={this.doUpdate} >DAFTAR</Button>
                                </form>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        createtUser: state.createtUser,
        imageProfileReducer: state.imageProfileReducer
    };
}

const mapDispatchToProps = {
    authUser: authUser,
    imageProfile: imageProfile,
    changeUserSession: changeUserSession
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);