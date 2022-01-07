import { useEffect } from "react";
import Vid from "../assets/bigvid.mp4";

function BodysSpine () {
    useEffect(() => {
        try{
            let player = document.getElementById("player-container")
        
            let t = setInterval(() => {
                player.play();
                
            }, 1000);
            
            player.onplay = () => {
                clearTimeout(t);
            }
        }catch(error) {}
    }, []);
  
    return <div style={bodySpineStyle()}>
        <video src={Vid} id="player-container" style={img()} loop={true}></video>
    </div>
}


function img() {
    return {
        transform: "scaleX(1.50) scaleY(1.50) translateY(80px)",
        width: "100%",
        height: "500px",
    }
}

function bodySpineStyle() {
    return {
        zIndex: "-1",
        width: "100%",
        height: "500px",
        diplay: "flex",
        justifyContent: "center",
    }
}

export default BodysSpine;  