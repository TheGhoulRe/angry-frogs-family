import { useState } from 'react';
import Discord from '../assets/Discord.png';

function JoinOrDiscord() {

    let [oJoin, serOJoin] = useState(false);
    let [oDiscord, serODiscord] = useState(false);

    return <div style={buttons()}>
        <button style={joinUs(oJoin)} onClick={() => document.location.assign("/") } onMouseLeave={() => serOJoin(false)} onMouseOver={() => serOJoin(true)} >Join Us</button>
        <button style={discord(oDiscord)} onClick={() => document.location.assign("/") } onMouseLeave={() => serODiscord(false)} onMouseOver={() => serODiscord(true)} >
            <img src={Discord} alt="discord" style={image()} /> 
            Discord
        </button>
    </div>
}

function joinUs(oJoin) {
    return {
        backgroundColor: !oJoin ? "#DB2A2B" : "#BB0A0B",
        color: "white",
        border: "none",
        borderRadius: "0.4em",
        width: "140px",
        margin: "5px",
        padding: "10px",
        transition: "background 0.5s ease-in-out",
    }
}

function discord(oDiscord) {
    return {
        backgroundColor: oDiscord ? "white" : "rgba(255, 255, 255, 0)",
        color: !oDiscord ? "white" : "black",
        margin: "5px",
        border: "2px solid white",
        borderRadius: "0.4em",
        width: "120px",
        padding: "8px",
        transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
    }
}

function image() {
    return {
        height: "10px",
        width: "auto",
        padding: "5px",
        verticalAlign: "middle",
    }
}

function buttons() {
    return {
        paddingTop: "40px",
    }
}

export default JoinOrDiscord;