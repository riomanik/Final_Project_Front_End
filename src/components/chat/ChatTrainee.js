import React from 'react';
import socketIOClient from "socket.io-client";
import { Button } from 'reactstrap';
import { TextArea } from 'grommet';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { connect } from 'react-redux';

var socket;
export class ChatTrainee extends React.Component {
    constructor() {
        super();
        this.state = {
            response: [],
            endpoint: "157.230.46.55:6969",
            message: "",
            bilik: "",
            whoAmI: "",
            text: false
        };
    }

    componentDidMount = async () => {
        await this.doSetWhoAmI();
        await this.doSetBilik();
        await this.doConnect();
    }

    doConnect = () => {
        console.log(this.state.bilik);
        const { endpoint } = this.state;
        socket = socketIOClient(endpoint);
        socket.on(this.state.bilik, this.doGetData);
        this.setState({ text: true })
        console.log(this.state.response)
    };
    doGetData = (msg) => {
        this.setState({ response: msg })
    };

    doChat = (event) => {
        this.setState({ 'message': event.target.value })
    };

    doSetBilik = (event) => {
        this.setState({ 'bilik': 'tanker' })
    };
    doSetWhoAmI = (event) => {
        this.setState({ 'whoAmI': this.props.userActiveReducer.fullName })
    };

    doSend = () => {
        socket.emit(this.state.bilik, this.state.whoAmI + " : " + this.state.message);
        this.setState({ 'message': '' })
    };

    doRenderMessage = () => {
        return this.state.response.map((msg, index) => {
            return (
                <>
                    <div key={index}>
                        <div style={{ width: "750px", marginLeft: "-50px" }}>
                            {msg}
                            <hr color="#251EE3"></hr>
                        </div>
                    </div>
                </>
            )
        })
    }

    render() {
        const { response, bilik } = this.state;
        return (
            <div className="card-body" style={{ height: "920px" }}>
                <MainNavbarTrainee status={{ name: "chat" }} />
                <div className="card" style={{ margin: "auto", width: "800px", borderRadius: "3%", marginTop: "5%" }}>
                    <div className="card-body" style={{ width: "800px", height: "auto", borderRadius: "3%", border: "1px solid #251EE3" }}>
                        <h1 className="text-center"><b><img src="https://static.vecteezy.com/system/resources/previews/000/437/500/non_2x/vector-chat-icon.jpg" style={{ width: "70px", height: "70px", marginTop: "10px" }} /> Discuss </b></h1>
                        <div className="card-body" >
                            {this.state.text ? <h3 className="text-center" ></h3> : ""}
                            {response
                                ?
                                <div>
                                    <div class="col-lg-4 col-md-6 mb-4" style={{ width: "2000px" }} >
                                        <div class="card-body" >
                                            <br></br>
                                            <h5 class="card-title" style={{ marginTop: "-20px" }}>
                                                <b><b>{this.doRenderMessage()}</b></b>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                : <p>Loading...</p>}
                        </div>
                        {this.state.text ?
                            <>
                                <TextArea
                                    style={{ marginTop: "-100px" }}
                                    placeholder="Type your Message in here"
                                    value={this.state.message} onChange={this.doChat}
                                />
                                <Button className="btn btn-block mt-3" style={{ backgroundColor: "#251EE3", border: "#251EE3 solid 1px" }} onClick={this.doSend}><b>Send</b></Button>
                            </>
                            : ""}
                    </div>
                </div>
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

export default connect(mapStateToProps, null)(ChatTrainee);