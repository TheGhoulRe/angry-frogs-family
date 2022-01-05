import FlowerL from "../assets/FlowerL.png";
import FlowerR from "../assets/FlowerR.png";
import Member from "../components/Member";
import Founder1 from "../assets/Founder1.png";
import Founder2 from "../assets/Founder2.png";
import Member1 from "../assets/Member1.png";
import Member2 from "../assets/Member2.png";
import Member3 from "../assets/Member3.png";
import Member4 from "../assets/Member4.png";
import OpenSea from "../assets/OpenSea.svg";
import { useState } from "react";

function Team () {
    let [oOpenSea, setOOpenSea] = useState(false);
    return <div id="teamView">
        <center>
            <h2 style={titleStyle()}>MEET THE TEAM</h2>
            <div style={cardStyles()}>
                <img src={FlowerL} alt=""  style={stdHeight()}/>
                <Member image={Founder1} name="Don Frogleone" pos="Founder" style={stdHeight()}/>
                <Member image={Founder2} name="Don Caleone" pos="Founder" style={stdHeight()}/>
                <img src={FlowerR} alt=""  style={stdHeight()}/>
            </div>
            <div style={cardStyles()}>
                <Member image={Member1} name="Feleapo Hylamedici" pos="Skipper" style={stdHeight()}/>
                <Member image={Member2} name="Giovanni Profrogi" pos="Wet works" style={stdHeight()}/>
                <Member image={Member3} name="Milliana Frogiano" pos="PR Consigliere" style={stdHeight()}/>
                <Member image={Member4} name="Taytalia" pos="The Messenger" style={stdHeight()}/>
            </div>

            <div style={titleStyle()}>To become a member, by an Angry Frogs on OpenSea.</div>

            <button style={openSeaButton(oOpenSea)} onMouseLeave={() => setOOpenSea(false)} onMouseOver={() => setOOpenSea(true)} >
                <img src={OpenSea} style={imageStyle()} alt="" /> 
                Buy on Opensea
            </button>

            <h2>STACKING DEVICE</h2>
        </center>
    </div>
}

function cardStyles() {
    return {
        display: "flex",
        justifyContent: "center",
    }
}

function titleStyle() {
    return {
        textAlign: "center",
        paddingTop: "70px",
    }
}

function imageStyle() {
    return {
        margin: "10px",
        height: "24px",
        verticalAlign: "middle",
    }
}

function openSeaButton(oOpenSea) {
    return {
        backgroundColor: !oOpenSea ? "#DB2A2B" : "#BB0A0B",
        transition: "background 0.5s ease-in-out",
        color: "white",
        border: "none",
        borderRadius: "0.4em",
        width: "284px",
        margin: "20px",
        padding: "10px",
    }
}

function stdHeight() {
    return {
        height: "150px",
        margin: "20px",
    }
}

export default Team;