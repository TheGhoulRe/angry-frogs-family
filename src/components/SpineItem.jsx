import { useEffect } from "react";
import Vid from "../assets/bigvid.mp4";

function SpineItem () {
    useEffect(() => {
        let t = setInterval(() => {
            document.getElementById("player-container").oncanplay = () => {
                document.getElementById("player-container").play();
                clearInterval(t);
            }
        });
    }, 100);
  
    return <div id="background" style={img()}>
        <video src={Vid} id="player-container" style={img()}></video>
    </div>
}


function img() {
    return {
        transform: "scale(1.35)",
    }
}

function bodySpineStyle() {
    return {
        width: "100%",
        height: "100%"
    }
}

export default SpineItem;
