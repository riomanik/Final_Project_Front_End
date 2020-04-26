import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from 'components/Footers/Footer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { TextField, Input, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { ViewSaldoTrainee } from "api/saldo";
import { viewSaldoAction } from 'actions/saldo';
import swal from 'sweetalert';
import { Card, Button, Label } from 'reactstrap';
import BlockLoading from 'react-loadingg/lib/BlockLoading';

var accounting = require("accounting");

export class ViewSaldo extends React.Component {
    state = { saldo: [] }

    componentDidMount = async () => {
        try {
            const response = await ViewSaldoTrainee(this.props.userActiveReducer.traineeId, this.props.tokenReducer.token)
            const data = await response.json();
            await this.setState({ saldo: data });
            this.props.viewSaldoAction(data.accountNumber)
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
                    <Card className="card-body" style={{ margin: "auto", marginTop: "190px", width: "800px", height: "520px", borderRadius: "1%", border: "1px solid #251EE3" }}>
                        <Container component="main" maxWidth="xs" style={{ marginTop: "35px" }}>
                            <CssBaseline />
                            <div className={this.useStyles.paper}>
                                <img src="https://webstockreview.net/images/blue-clipart-money-3.png" style={{ width: "100px", height: "100px", marginLeft: "140px" }} />
                                <h2 className="text-center"><b>TOTAL BALANCE</b></h2>
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
                                            <Label>Account Number</Label><b>
                                                <TextField variant="outlined" required fullWidth
                                                    value={this.state.saldo.accountNumber} /></b>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Label>Total Balance</Label><b>
                                                <TextField variant="outlined" required fullWidth
                                                    value={accounting.formatMoney(this.state.saldo.totalBalance, " Rp. ", 2, ".", ",")} /></b>
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
        ViewSaldo: state.ViewSaldo,
        userActiveReducer: state.userActive,
        tokenReducer: state.tokenReducer
    };
};
const mapDispatchToProps = {
    viewSaldoAction: viewSaldoAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSaldo);
