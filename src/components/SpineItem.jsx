import { useEffect } from "react";
import Img from "../assets/animationSection.svg";

function SpineItem () {
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
  
    return <div id="background" style={bodySpineStyle()}>
        <img src={Img} alt="" id="player-container" style={img()} />
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
