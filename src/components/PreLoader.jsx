import Founder1 from "../assets/Founder1.png";
import { useState } from "react"
import { useEffect } from "react";

function PreLoader() {
    
    let [width, setWidth] = useState("0px");
    let [borderColor, setBorderColor] = useState("black");
    let [scale, setScale] = useState("scale(1)");
    let [opacity, setOpacity] = useState("1");
    let [display, setDisplay] = useState("flex");


    useEffect(() => {
        (async () => {
            setBorderColor("red");
            setWidth("300px");
            await sleep(0.6);
            setBorderColor("black");
            await sleep(2);
            setBorderColor("red");
            await sleep(2);
            setWidth("0px");
            await sleep(1);
            setScale("scale(0.89)");
            setBorderColor("black");
            setOpacity("0");
            await sleep(1);
            setDisplay("none");
        })();
    }, []);
    
    return <div style={preLoaderStyle(scale, display, opacity)}>
        <div style={textRegion()}>
            <div style={affStyle(width, borderColor)}>
                <img src={Founder1} alt="" />
            </div>
        </div>
    </div>
}

function sleep(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), seconds * 1000);
    })
}

function preLoaderStyle(scale, display, opacity) {
    return {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        justifyContent: "center",
        flexDirection: "column",
        transform: scale,
        display, opacity,
        zIndex: "1000",
        transition: "transform 1s linear, opacity 1s linear",
    }
}

function textRegion() {
    return {
        display: "flex",
        justifyContent: "center",
    }
}

function affStyle(width, borderColor) {
    return {
        borderRight: "2px solid " + borderColor,
        textAlign: "center",
        width: width,
        overflow: "hidden",
        color: borderColor,
        transition: "width 1s ease-in-out, border-right 1s ease-in-out, color 0.9s ease-in-out",
    }
}

export default PreLoader;