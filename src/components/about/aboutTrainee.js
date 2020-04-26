import React from 'react';
import './about.css'
import Footer from 'components/Footers/Footer';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';

export class aboutTrainee extends React.Component {
    render() {
        return (
            <>
                <MainNavbarTrainee status={{ name: "about" }} />
                <div class="aboutus-section" style={{ height: "852px" }}>
                    <div class="container">
                        <div class="row " style={{ marginTop: "140px" }} >
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="aboutus-banner">
                                    <img
                                        class="card-img-top"
                                        src={require("assets/img/ngIDE-blue.png")}
                                        alt=""
                                        style={{ height: "220px", width: "250px", marginTop: "70px" }}
                                    />
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="aboutus">
                                    <h2 class="aboutus-title"><b style={{ color: "black" }}>𝐀𝐛𝐨𝐮𝐭 𝐔𝐬</b></h2>
                                    <p class="aboutus-text"><b style={{ color: "black", fontSize: "18px" }}>𝘞𝘦 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘧𝘪𝘯𝘢𝘭 𝘨𝘳𝘰𝘶𝘱 𝘰𝘧 𝘵𝘩𝘦 𝘌𝘯𝘪𝘨𝘮𝘢-𝘊𝘢𝘮𝘱 𝘱𝘳𝘰𝘫𝘦𝘤𝘵 𝘵𝘩𝘢𝘵 𝘮𝘢𝘬𝘦𝘴 𝘌-𝘓𝘦𝘢𝘳𝘯𝘪𝘯𝘨 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴 𝘣𝘢𝘴𝘦𝘥 𝘰𝘯 𝘴𝘵𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘷𝘪𝘥𝘦𝘰 𝘢𝘯𝘥 𝘳𝘦𝘢𝘥 𝘱𝘥𝘧.</b></p>
                                    <p class="aboutus-text"> <b style={{ color: "black", fontSize: "18px" }}>𝘕𝘨𝘪𝘥𝘦 𝘪𝘴 𝘢 𝘵𝘦𝘢𝘮 𝘦𝘯𝘨𝘢𝘨𝘦𝘥 𝘪𝘯 𝘦𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯, 𝘰𝘶𝘳 𝘮𝘪𝘴𝘴𝘪𝘰𝘯 𝘪𝘴 𝘵𝘰 𝘪𝘯𝘵𝘳𝘰𝘥𝘶𝘤𝘦 𝘵𝘩𝘦 𝘸𝘰𝘳𝘭𝘥 𝘰𝘧 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘴 𝘵𝘰 𝘵𝘩𝘦 𝘸𝘪𝘥𝘦𝘳 𝘸𝘰𝘳𝘭𝘥, 𝘵𝘩𝘳𝘰𝘶𝘨𝘩 𝘰𝘶𝘳 𝘧𝘪𝘳𝘴𝘵 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘸𝘦 𝘩𝘰𝘱𝘦 𝘵𝘩𝘢𝘵 𝘰𝘶𝘳 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘸𝘪𝘭𝘭 𝘣𝘦 𝘨𝘳𝘦𝘢𝘵 𝘢𝘯𝘥 𝘤𝘢𝘯 𝘩𝘢𝘷𝘦 𝘢𝘯 𝘪𝘮𝘱𝘢𝘤𝘵 𝘰𝘯 𝘵𝘩𝘦 𝘴𝘶𝘳𝘳𝘰𝘶𝘯𝘥𝘪𝘯𝘨 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺. </b></p>
                                </div>
                            </div>
                            <div class="col-md-5 col-sm-6 col-xs-12">
                                <div class="feature" >
                                    <div class="feature-box" >
                                        <div class="clearfix">
                                            <div class="iconset mt-3" style={{ borderRadius: "50%" }}>
                                                <img
                                                    class="card-img-top"
                                                    src={require("assets/img/faces/Saptari-W.jpg")}
                                                    alt=""
                                                    style={{ height: "80px", width: "80px", borderRadius: "50%" }}
                                                />
                                            </div>
                                            <div class="feature-content">
                                                <h4><b style={{ color: "black" }}>𝐒𝐚𝐩𝐭𝐚𝐫𝐢</b></h4>
                                                <p style={{ fontSize: "16px" }}><b>𝘔𝘰𝘴𝘵 𝘨𝘰𝘰𝘥 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘦𝘳𝘴 𝘥𝘰 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘪𝘯𝘨 𝘯𝘰𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘵𝘩𝘦𝘺 𝘦𝘹𝘱𝘦𝘤𝘵 𝘵𝘰 𝘨𝘦𝘵 𝘱𝘢𝘪𝘥 𝘰𝘳 𝘨𝘦𝘵 𝘢𝘥𝘶𝘭𝘢𝘵𝘪𝘰𝘯 𝘣𝘺 𝘵𝘩𝘦 𝘱𝘶𝘣𝘭𝘪𝘤, 𝘣𝘶𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘪𝘵 𝘪𝘴 𝘧𝘶𝘯 𝘵𝘰 𝘱𝘳𝘰𝘨𝘳𝘢𝘮. </b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="feature-box">
                                        <div class="clearfix">
                                            <div class="iconset mt-1" style={{ borderRadius: "50%" }}>
                                                <img
                                                    class="card-img-top"
                                                    src={require("assets/img/faces/Rahadi-chan.jpg")}
                                                    alt=""
                                                    style={{ height: "80px", width: "80px", borderRadius: "50%" }}
                                                />
                                            </div>
                                            <div class="feature-content">
                                                <h4><b style={{ color: "black" }}>𝐑𝐚𝐡𝐚𝐝𝐢</b></h4>
                                                <p style={{ fontSize: "16px" }}><b>𝘞𝘢𝘭𝘬𝘪𝘯𝘨 𝘰𝘯 𝘸𝘢𝘵𝘦𝘳 𝘢𝘯𝘥 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘪𝘯𝘨 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘧𝘳𝘰𝘮 𝘢 𝘴𝘱𝘦𝘤𝘪𝘧𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘢𝘳𝘦 𝘦𝘢𝘴𝘺 𝘪𝘧 𝘣𝘰𝘵𝘩 𝘢𝘳𝘦 𝘧𝘳𝘰𝘻𝘦𝘯. </b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="feature-box">
                                        <div class="clearfix">
                                            <div class="iconset mt-2" style={{ borderRadius: "50%" }}>
                                                <img
                                                    class="card-img-top"
                                                    src={require("assets/img/faces/Aziz-M.jpg")}
                                                    alt=""
                                                    style={{ height: "80px", width: "80px", borderRadius: "50%" }}
                                                />
                                            </div>
                                            <div class="feature-content">
                                                <h4><b style={{ color: "black" }}>𝐀𝐳𝐢𝐳</b></h4>
                                                <p style={{ fontSize: "16px" }}><b>𝘐𝘵’𝘴 𝘢 𝘤𝘶𝘳𝘪𝘰𝘶𝘴 𝘵𝘩𝘪𝘯𝘨 𝘢𝘣𝘰𝘶𝘵 𝘰𝘶𝘳 𝘪𝘯𝘥𝘶𝘴𝘵𝘳𝘺: 𝘯𝘰𝘵 𝘰𝘯𝘭𝘺 𝘥𝘰 𝘸𝘦 𝘯𝘰𝘵 𝘭𝘦𝘢𝘳𝘯 𝘧𝘳𝘰𝘮 𝘰𝘶𝘳 𝘮𝘪𝘴𝘵𝘢𝘬𝘦𝘴, 𝘣𝘶𝘵 𝘸𝘦 𝘢𝘭𝘴𝘰 𝘥𝘰𝘯’𝘵 𝘭𝘦𝘢𝘳𝘯 𝘧𝘳𝘰𝘮 𝘰𝘶𝘳 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘦𝘴. </b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="feature-box">
                                        <div class="clearfix">
                                            <div class="iconset mt-2" style={{ borderRadius: "50%" }}>
                                                <img
                                                    class="card-img-top"
                                                    src={require("assets/img/faces/Rio.jpg")}
                                                    alt=""
                                                    style={{ height: "80px", width: "80px", borderRadius: "50%" }}
                                                />
                                            </div>
                                            <div class="feature-content">
                                                <h4><b style={{ color: "black" }}>𝐑𝐢𝐨</b></h4>
                                                <p style={{ fontSize: "16px" }}><b>𝘐𝘧 𝘥𝘦𝘣𝘶𝘨𝘨𝘪𝘯𝘨 𝘪𝘴 𝘵𝘩𝘦 𝘱𝘳𝘰𝘤𝘦𝘴𝘴 𝘰𝘧 𝘳𝘦𝘮𝘰𝘷𝘪𝘯𝘨 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘣𝘶𝘨𝘴, 𝘵𝘩𝘦𝘯 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘪𝘯𝘨 𝘮𝘶𝘴𝘵 𝘣𝘦 𝘵𝘩𝘦 𝘱𝘳𝘰𝘤𝘦𝘴𝘴 𝘰𝘧 𝘱𝘶𝘵𝘵𝘪𝘯𝘨 𝘵𝘩𝘦𝘮 𝘪𝘯. </b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}