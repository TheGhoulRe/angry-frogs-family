import { useEffect } from "react";
import Vid from "../assets/bigvid.mp4";

function SpineItem () {
    useEffect(() => {
        let t = setInterval(() => {
            document.getElementById("player-container").oncanplaythrough = () => {
                document.getElementById("player-container").play();
                clearInterval(t);
            }
        }, 1000);
    }, []);
  
    return <div id="background" style={bodySpineStyle()}>
        <video src={Vid} id="player-container" style={img()}></video>
    </div>
}


function img() {
    return {
        // transform: "scale(1.35)",
        width: "100%",
    }
}

function bodySpineStyle() {
    return {
        width: "100%",
        overflow: "hidden",
    }
}

export default SpineItem;
