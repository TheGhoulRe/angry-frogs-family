import Img from "../assets/animationSection.svg";

function SpineItem () {
    
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
