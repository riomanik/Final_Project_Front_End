import React from 'react';
import { Button, Card, Label } from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import Footer from 'components/Footers/Footer';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { purchase } from 'api/transaction';
import { ViewSaldoTrainee } from 'api/saldo';
import swal from 'sweetalert';
import BlockLoading from 'react-loadingg/lib/BlockLoading';

var accounting = require("accounting");


export class Payments extends React.Component {
    state = { classId: null, traineeId: null, NameOnCard: null, cardNumber: null, numberCard: "", totalSaldo: "" }

    onInputNameOnCardChange = (event) => {
        try {
            this.setState({ NameOnCard: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };
    onInputCardNumberChange = (event) => {
        try {
            this.setState({ cardNumber: event.target.value })
        } catch (error) {
            console.log(error)
        }
    };


    componentDidMount = async () => {
        try {
            const response = await ViewSaldoTrainee(this.props.userActiveReducer.traineeId, this.props.tokenReducer.token)
            const data = await response.json();
            this.setState({ numberCard: data.accountNumber })
            this.setState({ totalSaldo: data.totalBalance })
            this.setState({ traineeId: this.props.userActiveReducer.traineeId })
            this.setState({ classId: this.props.selectedClassDetail })
        } catch (error) {
            console.log(error)
        }
    }

    purchase = async () => {
        try {
            swal({
                title: "Are you sure?",
                text: " We cannot return the class that was purchased!",
                buttons: true,
                dangerMode: true,
            })
                .then(async (willDelete) => {
                    if (willDelete) {
                        const response = await purchase(this.props.selectedClass.id, this.state.traineeId, this.props.tokenReducer.token)
                        const data = await response.json();
                        if (data.id === 1) {
                            this.props.history.push({ pathname: '/protected/main-trainee/list-class' })
                            swal("Successfully, thanks for buy this class ")
                        } else if (data.id === 0) {
                            swal("your balance is not enough")
                        } else {
                            swal("server error")
                        }
                    } else {
                        swal("that's okay , we will wait you :D");
                    }
                });
        } catch (error) {
            console.log(error)
        }
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
        }
    }));
    render() {
        return (
            <div>
                <div style={{ width: "100%", height: "852px" }}>
                    <MainNavbarTrainee status={{ name: "Payment" }} />
                    <br></br>
                    <Card className="card-body" style={{ margin: "auto", marginTop: "80px", width: "800px", height: "730px", borderRadius: "1%", border: "1px solid #251EE3" }}>
                        <Container component="main" maxWidth="xs" style={{ marginTop: "15px" }}>
                            <CssBaseline />
                            <div className={this.useStyles.paper}>
                                <img src="https://www.cairnskangarooms.com/wp-content/uploads/2018/07/Make-your-payment-Icon.png" style={{ width: "100px", height: "100px", marginLeft: "130px" }} />
                                <h2 className="text-center" style={{ marginTop: "10px" }}><b>Payment</b></h2>
                                <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
                                </Typography>
                                <br>
                                </br>
                                <form className={this.useStyles.form} noValidate>
                                    <Grid container spacing={3} >
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" fullWidth
                                                label="Acount Number" name="Acount Number" autoComplete="Acount Number" value={this.state.numberCard} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField Type="number" variant="outlined" fullWidth id="ClassName" value={this.props.selectedClass.topic}
                                                label="Class Name" name="ClassName" autoComplete="ClassName" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField Type="number" variant="outlined" fullWidth id="totalSaldo" value={accounting.formatMoney(this.state.totalSaldo, " Rp. ", 2, ".", ",")}
                                                label="Total Balance" name="totalBalance" autoComplete="totalBalance" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" fullWidth id="Price" value="10000" value={accounting.formatMoney(this.props.selectedClass.price, " Rp. ", 2, ".", ",")} label="Price" name="Price" autoComplete="Price" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField Type="number" variant="outlined" fullWidth id="Trainer" value="Trainer" value={this.props.selectedClassDetail.trainerDetail.fullName}
                                                label="Trainer" name="Trainer" autoComplete="Trainer" />
                                        </Grid>
                                    </Grid>
                                    <br></br>
                                    <Button color="primary" size="lg" className="btn btn-primary btn-lg btn-block" onClick={this.purchase}>Purchase</Button>
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
        selectedClass: state.selectedClass,
        selectedClassDetail: state.selectedClassDetail,
        userActiveReducer: state.userActive,
        viewSaldoReducer: state.viewSaldoReducer,
        tokenReducer: state.tokenReducer
    };
};

export default connect(mapStateToProps, null)(Payments);