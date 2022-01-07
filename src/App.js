import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NavUnderBody from './components/NavUnderBody';
import AnimationSection from './components/AnimationSection';
import Team from './components/Team';
import StakingDevice from './components/StakingDevice';
import StackingDeviceImg from './assets/StackingDevice.png';
import './App.css';
import { useEffect, useState } from 'react';
import initialState from './initialState';
import ClubWelcome from './components/ClubWelcome';
import RoadMap from "./components/Roadmap";
import PreLoader from "./components/PreLoader";

function App() {
  let [state, setState] = useState(initialState());
  
  useEffect(() => {
    let IDs = ["navUnderBody", "animationSection", "teamView", "aniStakingDevice", "clubWelcome", "aniRoadmap", "footer"];
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

      <Body {...state.body} />  {/* body */}
      <Header {...state.header} />
      <NavUnderBody {...state.navUnderBody}/>     {/* navUnderBody */}
      <AnimationSection {...state.animationSection}/>   {/* animationSection */}
      <Team />      {/* teamView */}
      <StakingDevice stackingDeviceImg={StackingDeviceImg} />    {/* aniStakingDevice */}
      <ClubWelcome {...state.clubWelcome}/>   {/* clubWelcome */}
      <RoadMap {...state.roadMaps} toggle={i => setState(toggle(i, state)) }  toggle2={i => setState(toggle2(i, state)) } />    {/* aniRoadmap */}
      <Footer {...state.footer}/>       {/* footer */}

      <PreLoader />
    </div>
  );
}

function somethingToDo(bottomPos) {
  let IDs = ["navUnderBody", "animationSection", "teamView", "aniStakingDevice", "clubWelcome", "aniRoadmap", "footer"];
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

function toggle(i, state) {
  const newStates = [...state.roadMaps.states];
  newStates[i] = !newStates[i];
  const newState = {...state};
  newState.roadMaps.states = newStates;
  return newState;
}

function toggle2(i, state) {
  const newStates = [...state.roadMaps.points];
  newStates[i][0] = !newStates[i][0];
  const newState = {...state};
  newState.roadMaps.points = newStates;
  return newState;
}

export default App;
