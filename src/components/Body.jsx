import PreText from './PreText';
import JoinOrDiscord from "./JoinOrDiscord";
import HeaderBanner from "../assets/HeaderBanner.svg";
import BodysSpine from './BodysSpine';
import { useState } from 'react';
import { useEffect } from 'react';

function Body({header1, header2, body, preText, otherImages}) {

    let {texts, images, colors, links} = preText;
    let [FrogsBanner] = otherImages;

    useEffect(() => {
        document.getElementById("body").style.paddingTop = document.getElementsByTagName("header")[0].offsetHeight + "px";
    }, []);

    return (
        <div id="body" style={bodyContainer()}>
            <BodysSpine />
            <div style={bodyStyle()}>
                <div style={preTextStyle()}>
                    {
                        [0, 1, 2].map(val => {
                            return <PreText key={val} text={texts[val]} image={images[val]} color={colors[val]} onClick={() => document.location.assign(links[val]) } />;
                        })
                    }
                </div>
                <div style={boxContainer()}>
                    <div style={introBox()}>
                        <div style={offsetText()}>
                            <div style={headerText()}>{header1}</div>
                            <div style={underPart()}>
                                <img src={HeaderBanner} alt="" />
                                <div></div>
                            </div>
                        </div>

                        <h1>{header2}</h1>
                        <p>{body}</p>
                        
                        <JoinOrDiscord />
                    </div>
                </div>
                
                <div id="rightSideText">
                    {/* <img src={FrogsBanner} alt="frog's banner" /> */}
                </div>
            </div>
        </div>
    );
}

function bodyContainer() {
    return {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "500px",
        overflow: "hidden",
        color: "white",
    }
}

function headerText() {
    return {
        backgroundColor: "#1A2234",
        fontWeight: "700",
        padding: "15px",
        borderTopLeftRadius: "2px",
        borderTopRightRadius: "2px",
        borderBottomRightRadius: "2px",
        
    }
}

function underPart() {
    return {
        display: "flex",
        justifyContent: "space-between",
    }
}

function offsetText() {
    return {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        padding: "0px",
        margin: "0px",
        position: "relative",
        left: "-51px",
    }
}

function bodyStyle() {
    return {
        backgroundColor: "#3232325C",
        display: "flex",
        justifyContent: "space-around",
        height: "500px",
        position: "relative",
        top: "-500px",         // Re-renders 3 times (apparently) and the amount keeps on increasing with each render
    }
}

function boxContainer() {
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        paddingLeft: "50px",
        backgroundColor: "transparent",
    }
}

function introBox() {
    return {
        background: "rgba(0,0,0,0.5)",
        padding: "40px",
        width: "80%",
        borderRadius: "20px",
    }
}

function preTextStyle() {
    return {
        paddingLeft: "30px",
        paddingTop: "65px",
    }
}
export default Body;