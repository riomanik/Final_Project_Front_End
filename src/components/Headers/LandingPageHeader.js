import React from "react";
import './LandingPageHeader.css'
import Typical from 'react-typical'
function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div>
      <header style={{ height: "950px" }} >
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" >
          <source src="https://images.all-free-download.com/footage_preview/mp4/laptop_typing_notebook_computer_work_372.mp4" type="video/mp4" />
        </video>
        <div class="container h-100">
          <div class="d-flex text-center h-100">
            <div className="motto text-center text-white bold">
              <img
                class="card-img-top"
                src={require("assets/img/ngIDE-blue.png")}
                alt=""
                style={{ height: "380px", width: "500px", marginTop: "140px" }}
              />
              <h2 className="">“When you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.” </h2>
              <br />
              <Typical
                steps={[':D', 500, 'Welcome back to my company ,  we hope you enjoy that', 100]}
                loop={Infinity}
                wrapper="p"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LandingPageHeader;
