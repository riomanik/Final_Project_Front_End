
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "assets/css/bootstrap.min.css";
import "assets/css/creative.css";
import "assets/css/creative.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import './app.css';
import LandingPage from "components/landingPage/LandingPage";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "components/signup/SignUp";
import DetailClass from "components/MainTrainee/detailClass";
import ProfileTrainee from "components/profile/profileTrainee";
import mainPageTrainer from "./components/MainTrainer/mainPageTrainer";
import Checkout from "components/MainTrainer/checkout";
import Payment from "components/payment/Payment";
import CheckoutTopUp from "components/transaction/topUp";
import ListClass from "components/MainTrainer/listClass";
import assignment from "components/MainTrainer/assignment";
import profileTrainer from "components/profile/profileTrainer";
import Instruction from "components/MainTrainer/instruction";
import ListClassTrainee from "components/MainTrainee/listClassTrainee";
import mainPageTrainee from "components/MainTrainee/mainPageTrainee";
import ViewClass from "components/listClass/ViewClass";
import TraineeLesson from "./components/Lessons/TraineeLesson";
import pdf from "components/Lessons/file";
import ViewSaldo from "components/transaction/viewSaldo";
import TrainerLesson from "components/MainTrainer/trainerLesson";
import SignInTrainee from "components/login/SignInTrainee";
import SignInTrainer from "components/login/SignInTrainer";
import pdfTrainer from "components/MainTrainer/pdfTrainer";
import videoTrainer from "components/MainTrainer/videoTrainer";
import ListTraineeByTrainer from "components/MainTrainer/ListTraineeByTrainer";
import videoTrainee from "./components/Lessons/videoTrainee";
import tugasTrainee from "components/Lessons/tugasTrainee";
import tugasTrainer from "components/MainTrainer/tugasTrainer";
import ListClassOfTrainer from "components/AssignmentTrainer/ListClassOfTrainer";
import ListTraineeTask from "components/AssignmentTrainer/ListTraineeTask";
import ScoreTrainee from "components/AssignmentTrainer/ScoreTrainee";
import Error404 from "components/error/404";
import Error500 from "components/error/505";
import ChatTrainee from "components/chat/ChatTrainee";
import ChatTrainer from "components/chat/ChatTrainer";
import { aboutTrainee } from "components/about/aboutTrainee";
import { aboutTrainer } from "components/about/aboutTrainer";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path='/protected/main/profile-trainee' Component={ProfileTrainee} />
                    <PrivateRoute path='/protected/main/profile-trainer' Component={profileTrainer} />
                    <PrivateRoute path='/protected/main/detail-class' Component={DetailClass} />
                    <PrivateRoute path='/protected/main/list-class' Component={ViewClass} />
                    <PrivateRoute path='/protected/main/chat-trainee' Component={ChatTrainee} />
                    <PrivateRoute path='/protected/main/chat-trainer' Component={ChatTrainer} />
                    <PrivateRoute path='/protected/main/payment' Component={Payment} />
                    <PrivateRoute path='/protected/main-trainer/check-out' Component={Checkout} />
                    <PrivateRoute path='/protected/main-trainee/lessons' Component={TraineeLesson} />
                    <PrivateRoute path='/protected/main-trainer/lessons' Component={TrainerLesson} />
                    <PrivateRoute path='/protected/main-trainer/list-class' Component={ListClass} />
                    <PrivateRoute path='/protected/main-trainer/list-trainee' Component={ListTraineeByTrainer} />
                    <PrivateRoute path='/protected/main-trainer/score-assignment' Component={assignment} />
                    <PrivateRoute path='/protected/main-trainer/instruction' Component={Instruction} />
                    <PrivateRoute path='/protected/main-trainer/class-trainee' Component={ListClassOfTrainer} />
                    <PrivateRoute path='/protected/main-trainer/trainee-task' Component={ListTraineeTask} />
                    <PrivateRoute path='/protected/main-trainer/trainee-score' Component={ScoreTrainee} />
                    <PrivateRoute path='/protected/file/main-trainer/pdf' Component={pdfTrainer} />
                    <PrivateRoute path='/protected/file/main-trainer/video' Component={videoTrainer} />
                    <PrivateRoute path='/protected/file/main-trainer/tugas' Component={tugasTrainer} />
                    <PrivateRoute path='/protected/main-trainer' Component={mainPageTrainer} />
                    <PrivateRoute path='/protected/main-trainee/list-class' Component={ListClassTrainee} />
                    <PrivateRoute path='/protected/main/top-up' Component={CheckoutTopUp} />
                    <PrivateRoute path='/protected/main-trainee' Component={mainPageTrainee} />
                    <PrivateRoute path='/protected/file/main-trainee/video' Component={videoTrainee} />
                    <PrivateRoute path='/protected/file/main-trainee/pdf' Component={pdf} />
                    <PrivateRoute path='/protected/file/main-trainee/tugas' Component={tugasTrainee} />
                    <PrivateRoute path='/protected/saldo/trainee/view-saldo' Component={ViewSaldo} />
                    <PrivateRoute path='/protected/about/trainee' Component={aboutTrainee} />
                    <PrivateRoute path='/protected/about/trainer' Component={aboutTrainer} />
                    <Route path='/login/trainee' render={(props) => <SignInTrainee {...props} />} />
                    <Route path='/login/trainer' render={(props) => <SignInTrainer {...props} />} />
                    <Route path='/register' render={(props) => <SignUp {...props} />} />
                    <Route path='/error-404' render={(props) => <Error404 {...props} />} />
                    <Route path='/error-500' render={(props) => <Error500 {...props} />} />
                    <Route path="/"
                        render={(props) => <LandingPage {...props} />}
                    />
                    <Route render={() => <div></div>}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;