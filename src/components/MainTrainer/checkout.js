
import React from 'react';
import { Container, CssBaseline, Typography, Grid, TextField, makeStyles, TextareaAutosize } from '@material-ui/core';
import { Button, Card } from 'reactstrap';
import MainNavbarTrainer from 'components/Navbars/MainNavbarTrainer';
import { connect } from 'react-redux';
import Subject from './subjectSelection/Subject';
import { createClass } from '../../api/trainer/index'
import swal from 'sweetalert';
import BlockLoading from 'react-loadingg/lib/BlockLoading';

export class Checkout extends React.Component {

  state = { topic: "", price: "", ide: "", duration: "", description: "", date: "", dates: "", previousSelectedDate: "", loading: "false" }

  onTopicInputChange = async (event) => {
    try {
      this.setState({ topic: event.target.value });
    } catch (error) {
      console.log(error)
    }
  };

  onPriceInputChange = async (event) => {
    try {
      this.setState({ price: event.target.value });
    } catch (error) {
      console.log(error)
    }
  };

  onIdeInputChange = async (event) => {
    try {
      this.setState({ ide: event.target.value });
    } catch (error) {
      console.log(error)
    }
  };

  onDurationInputChange = async (event) => {
    try {
      this.setState({ duration: event.target.value });
    } catch (error) {
      console.log(error)
    }
  };

  onDescriptionInputChange = async (event) => {
    try {
      this.setState({ description: event.target.value })
    } catch (error) {
      console.log(error)
    }
  }

  doCreateClass = async () => {
    try {
      if (this.props.userActiveReducer.trainerId, this.props.selectSubjectReducer, this.state.topic, this.state.price, this.state.ide, this.state.duration, this.state.description !== "") {
        swal({
          title: "Are you sure?",
          text: "We will create your class with this information!",
          buttons: true,
          dangerMode: true,
        })
          .then(async (willDelete) => {
            await this.setState({ loading: true });
            if (willDelete) {
              await this.setState({ loading: true })
              await createClass(this.props.userActiveReducer.trainerId, this.props.selectSubjectReducer, this.state.topic, this.state.price, this.state.ide, this.state.duration, this.state.description, this.props.tokenReducer.token);
              await swal(" Successfully , Your Class Has Been Add ")
              await this.setState({ loading: false })
              this.props.history.push({
                pathname: "/protected/main-trainer/list-class"
              })
            } else {
              swal("that's okay , we will wait you :D");
            }
          });
      } else {
        swal("Please complete all requirements")
      }
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
        {this.state.loading ?
          <div><BlockLoading /></div>
          : ""}
        <div style={{ width: "100%", height: "932px" }}>
          <MainNavbarTrainer />
          <br></br>
          <Card className="card-body" style={{ margin: "auto", marginTop: "72px", width: "750px", height: "835px", borderRadius: "5%", border: "2px solid #45c5d9" }}>
            <Container component="main" maxWidth="xs" style={{ marginTop: "5px" }}>
              <CssBaseline />
              <div className={this.useStyles.paper}>
                <img src="http://katvtech.com/wp-content/uploads/2019/02/3.png" style={{ width: "100px", height: "80px", marginLeft: "130px", marginTop: "-10px" }} />
                <h2 className="text-center" style={{ marginTop: "1px", marginBottom: "15px" }}><b>𝐂𝐫𝐞𝐚𝐭𝐞 𝐂𝐥𝐚𝐬𝐬</b></h2>
                <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
                </Typography>
                <form className={this.useStyles.form} noValidate>
                  <Grid container spacing={1} >
                    <Grid item xs={12}>
                      <label htmlFor="productName"><b>Choose your subject</b></label>
                      <Subject />
                    </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="productName"><b>Enter Topic for this class</b></label>
                      <TextField variant="outlined" required fullWidth id="Topic" onChange={this.onTopicInputChange}
                        label="Topic" name="Topic" autoComplete="Topic" />
                    </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="productName"><b>Enter prices for this class</b></label>
                      <TextField variant="outlined" required fullWidth id="Price" onChange={this.onPriceInputChange}
                        label="Price" name="Price" autoComplete="Price" type="number" />
                    </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="productName"><b>Select the IDE</b></label>
                      <select
                        className="custom-select"
                        onChange={this.onIdeInputChange}
                      >
                        <option>Open this select menu</option>
                        <option key="1" value="Eclipse IDE">
                          Eclipse IDE
                      </option>
                        <option key="2" value="Visual Studio Code">
                          Visual Studio Code
                      </option>
                        <option key="3" value="IntelliJ IDEA">
                          IntelliJ IDEA
                      </option>
                        <option key="4" value="WebStorm IDEA">
                          WebStorm IDEA
                      </option>
                      </select>
                    </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="productName"><b>Choose the duration of the class in here , when the class was end , the student can't see the learning! </b></label>
                      <TextField variant="outlined" required fullWidth id="Duration" type="number" onChange={this.onDurationInputChange}
                        label="Day [Example:30] " name="Duration" autoComplete="Duration" />
                    </Grid>
                    <Grid item xs={12} >
                      <label htmlFor="productName"><b>Enter the description of your class</b></label>
                      <TextareaAutosize variant="outlined" required fullWidth id="Description" onChange={this.onDescriptionInputChange}
                        label="Description" name="Description" autoComplete="Description" style={{ width: "380px", height: "80px" }} />
                    </Grid>
                  </Grid>
                  <br></br>
                  <Button size="lg" className="btn btn-lg btn-block " style={{ marginTop: "-10px", backgroundColor: "#251EE3", border: "1px solid #4287f5" }} onClick={this.doCreateClass}><b>Create</b>
                  </Button>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userActiveReducer: state.userActive,
    selectSubjectReducer: state.selectSubjectReducer,
    tokenReducer: state.tokenReducer
  };
};

export default connect(mapStateToProps, null)(Checkout);