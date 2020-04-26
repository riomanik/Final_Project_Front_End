import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { doPostSubmitScore } from '../../api/trainer';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';



export class FormPenilaian extends React.Component {
    state = {
        nilai: 0
    }
    onNilaiInputChange = (event) => {
        try {
            if (event.target.value <= 100) {
                this.setState({ nilai: event.target.value });
            } else {
                swal("Please input score beetwen 1-100")
                this.setState({ nilai: "" })
            }
        } catch (error) {
            console.log(error)
        }
    };

    doSubmitScore = async () => {
        try {
            await doPostSubmitScore(this.props.nameTraineeReducer, this.props.classTrainerReducer, this.props.taskTraineeReducer, this.state.nilai, this.props.tokenReducer.token);
            swal("success")
        } catch (error) {
            console.log(error)
        }
    }



    useStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
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
    render() {
        return (
            <div>
                <div style={{ width: "100%", height: "678px" }}>
                    <MainNavbarTrainer status={{ name: "scoring" }} />
                    <br></br>
                    <Container component="main" maxWidth="xs" style={{ marginTop: "100px", marginLeft: "490px" }}>
                        <CssBaseline />
                        <div className={this.useStyles.paper} style={{ marginLeft: "-400px" }}>
                            <Typography component="h1" variant="h5" style={{ marginLeft: "0px" }}>
                                <img src="http://cdn.onlinewebfonts.com/svg/img_532131.png" style={{ width: "70px", height: "70px" }} />
                                Form Penilaian
                        </Typography>
                            <br></br>
                            <form className={this.useStyles.form} noValidate>
                                <div>
                                    <br></br>
                                    <br></br>
                                    <InputLabel id="demo-simple-select-required-label" style={{ marginTop: "50px" }} ><b>Nilai</b></InputLabel>
                                    <TextField style={{ width: "500px" }} onChange={this.onNilaiInputChange} type="number" value={this.state.nilai}></TextField>
                                    <br></br>
                                    <Grid style={{ marginTop: "50px", width: "500px" }}>
                                        <Link to="/protected/main-trainer/trainee-task" color="warning" size="lg" className="btn btn-primary btn-lg btn-block" onClick={this.doSubmitScore}>Submit</Link>
                                    </Grid>
                                </div>
                            </form>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        taskTraineeReducer: state.taskTraineeReducer,
        classNameTrainerReducer: state.classNameTrainerReducer,
        nameTraineeReducer: state.nameTraineeReducer,
        selectTraineeReducer: state.selectTraineeReducer,
        classTrainerReducer: state.classTrainerReducer,
        tokenReducer: state.tokenReducer
    };
};



export default connect(mapStateToProps, null)(FormPenilaian);