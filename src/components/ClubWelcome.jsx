import { useState, useEffect } from "react";
import JoinOrDiscord from "./JoinOrDiscord";

function ClubWelcome ({headerText, leftSideText, images}) {

    let [i1, i2, i3, i4] = images;
    let [width, setWidth] = useState(window.innerWidth * 0.2);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const newWidth = window.innerWidth;
            const newCalculations = newWidth * 0.2;
            setWidth(newCalculations);
        })
    // eslint-disable-next-line
    }, []);

    return <div id="clubWelcome">
        <h1 style={titleStyle()}>{headerText}</h1>
        <div style={bodyStyle()}>
            <div style={lSideStyle()}>
                {
                    leftSideText.split("<br />").map((val, i) => {
                        return <p key={i}>{val}</p>
                    })
                }
                <JoinOrDiscord />
            </div>
            <div style={rSideStyle()}>
                <img src={i1} alt="" style={imgStyle(width)}/>
                <img src={i2} alt="" style={imgStyle(width)}/>
                <img src={i3} alt="" style={imgStyle(width)}/>
                <img src={i4} alt="" style={imgStyle(width)}/>
            </div>
        </div>
    </div>
}

function titleStyle() {
    return {
        textAlign: "center",
        padding: "30px",
    }
}

function bodyStyle() {
    return {
        display: "flex",
        justifyContent: "space-between",
    }
}

function rSideStyle() {
    return {
        ...anySide()
    }
}

function lSideStyle() {
    return {
        ...anySide(),
        padding: "40px",
    }
}

function anySide() {
    return {
        width: "50%",
    }
}

function imgStyle(width) {
    return {
        margin: "10px",
        width: (width < 200 ? 200 : width) + "px",
    }
}

export default ClubWelcome;