import React from 'react';
import { getListSubject } from '../../api/subject';
import { Button } from 'reactstrap';
import ShowMoreText from 'react-show-more-text';
import { connect } from 'react-redux';
import { idClass } from 'actions/class';
import { selectedClass } from 'actions/class';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { navbarClass } from 'actions/navbar';
import Typical from 'react-typical'
import { imageLessonsTrainee } from 'actions/image';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Footer from 'components/Footers/Footer';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#251EE3',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#251EE3',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

export class MainPageTrainee extends React.Component {
    state = { data: [], saldo: null }

    toListTrainee = (id, full) => {
        try {
            this.props.history.push({
                pathname: '/protected/main/list-class'
            })
            this.props.idClass(id);
            this.props.navbarClass(true);
            this.props.imageLessonsTrainee(full)
        } catch (error) {
            console.log(error)
        }
    }

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    componentWillMount = async () => {
        try {
            const responseSubject = await getListSubject(this.props.tokenReducer.token);
            const dataSubject = await responseSubject.json();
            this.setState({ data: dataSubject });
        } catch (error) {
            console.log(error)
        }
    }
    doRenderSubject = () => {
        if (this.state.data) {
            return this.state.data.map(sub => {
                let a = sub.imageFile.pathFile
                let tri = a.split("/")
                let length = tri.length
                let join = [tri[length - 2], tri[length - 1]]
                let jadi = join.join('/');
                let full = process.env.REACT_APP_WS_URL + `/file/${jadi}`
                return (
                    <div class="col-lg-3 col-md-6 mb-4" style={{ marginTop: "50px" }}>
                        <div class="card h-100" style={{ border: "1px #251EE3 solid", borderRadius: "4%" }}>
                            <img class="card-img-top img-fluid" src={`http://157.230.46.55:9004/ngide/file/${jadi}`} alt="" style={{ borderRadius: "0%", marginTop: "10px", width: "200px", height: "200px", marginLeft: "30px" }} />
                            <div class="card-body">
                                <h3 class="card-title mb-3"><b>{sub.programmingLanguage}</b></h3>
                                <ShowMoreText
                                    lines={5}
                                    more='Show more'
                                    less='Show less'
                                    anchorClass=''
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                >
                                    {sub.description}
                                </ShowMoreText>
                            </div>
                            <div class="card-footer">
                                <Button
                                    style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}
                                    className="btn-block mr-1"
                                    color="primary"
                                    type="button" onClick={() => {
                                        this.toListTrainee(sub.id, full);
                                    }} ><b>See More</b></Button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        let sFull = this.props.userActiveReducer.fullName
        return (
            <div>
                <MainNavbarTrainee />
                <header>
                    <div class="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="https://images.all-free-download.com/footage_preview/mp4/working_office_open_people_waiting_1073.mp4" type="video/mp4" />
                    </video>
                    <div class="container h-100">
                        <div class="d-flex text-center h-100">
                            <div class="my-auto w-100 text-white"><b>
                                <h1 class="display-3">Welcome {sFull}</h1>
                            </b>
                                <h2>Let's start choosing the programming language you want to learn</h2>
                                <hr></hr>
                                <Typical
                                    steps={['Thank you for join us,  we hope you enjoy that', 500]}
                                    loop={1}
                                    wrapper="p"
                                />
                            </div>
                        </div>
                    </div>
                </header>
                <div class="container" >
                    <h2 style={{ marginTop: "40px" }}><img src="https://cdn0.iconfinder.com/data/icons/online-education-and-e-learning-4/64/vector_616_11-512.png" style={{ width: "60px", height: "60px" }}></img><b style={{ color: "black" }}>  List of learning programming language</b> </h2>
                    <div class="row text-center">
                        {this.doRenderSubject()}
                    </div>
                    <ThemeProvider theme={theme}>
                        <ChatBot
                            headerTitle="Welcome"
                            recognitionEnable={true}
                            floating={true}
                            steps={[
                                {
                                    id: '1',
                                    message: 'What is your name?',
                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    user: true,
                                    trigger: '3',
                                },
                                {
                                    id: '3',
                                    message: 'Hi {previousValue}, nice to meet you!',
                                },
                            ]} style={{ marginLeft: "1550px" }}
                            className="fixed-bottom"
                        />
                    </ThemeProvider>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userActiveReducer: state.userActive,
        tokenReducer: state.tokenReducer
    }
};

const mapDispatchToProps = {
    idClass: idClass,
    selectedClass: selectedClass,
    navbarClass: navbarClass,
    imageLessonsTrainee: imageLessonsTrainee
};



export default connect(mapStateToProps, mapDispatchToProps)(MainPageTrainee)
