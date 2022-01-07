import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NavUnderBody from './components/NavUnderBody';
import AnimationSection from './components/AnimationSection';
import Team from './components/Team';
import StakingDevice from './components/StakingDevice';
import './App.css';
import { useEffect } from 'react';
import ClubWelcome from './components/ClubWelcome';
import RoadMap from "./components/Roadmap";
import PreLoader from "./components/PreLoader";

function App() {
  
  useEffect(() => {
    let IDs = ["navUnderBody", "about", "teamView", "aniStakingDevice", "clubWelcome", "aniRoadmap", "footer"];
    IDs.forEach((val) => {
      document.getElementById(val).style.opacity = 0;
    });
    
    window.addEventListener('scroll', function () {
      let lastPos = window.scrollY;
      somethingToDo(lastPos + window.innerHeight);
    });
  }, []);
  
  return (
    <div className="App" style={app()}>

      <Body />  {/* body */}
      <Header />
      <NavUnderBody />     {/* navUnderBody */}
      <AnimationSection />   {/* animationSection */}
      <Team />      {/* teamView */}
      <StakingDevice />    {/* aniStakingDevice */}
      <ClubWelcome />   {/* clubWelcome */}
      <RoadMap />    {/* aniRoadmap */}
      <Footer />       {/* footer */}

      <PreLoader />
    </div>
  );
}

function somethingToDo(bottomPos) {
  let IDs = ["navUnderBody", "about", "teamView", "aniStakingDevice", "clubWelcome", "aniRoadmap", "footer"];
  let positions = IDs.map((val) => document.getElementById(val).offsetTop );
  
  positions.forEach((pos,i) => {
    if (bottomPos - 200 >= pos) {
      let element = document.getElementById(IDs[i]);
      if (!element.classList.contains("scroll")) {
        element.classList.add("scroll");
        (async () => {
          await sleep(0.7);
          element.style.opacity = 1;
        })();
      }
    }
  });
}

function sleep(seconds) {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), seconds * 1000);
  })
}

function app() {
  return {
    minWidth: "1110px",
  }
}

export default App;
