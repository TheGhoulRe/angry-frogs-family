import { useState } from "react";
import Check from "../assets/Check.svg";

function Map ({points}) {

    let [position, toggle] = useState(-1);

    return <div>
        {
            points.map((val, i) => {
                let [state, text] = val;

                return <div key={i} style={item()}>
                    <div>
                        <div style={itemImg(position === i ? true : false )} onMouseOver={() => position === i || toggle(i)} onMouseLeave={() => position === -1 || toggle(-1)} >
                            <center>
                                <img src={Check} alt="." style={statusImage()} />
                            </center>
                        </div>
                    </div>
                    <div style={itemText()}>{text}</div>
                </div>
            })
        }
    </div>
}

function item() {
    return {
        minHeight: "50px",
        marginTop: "10px",
        marginBottom: "10px",
        ...flexCenter(),
    }
}

function itemText() {
    return {
        width: "60%",
        textAlign: "left",
        flexDirection: "column",
        paddingLeft: "20px",
        ...flexCenter(),
    }
}

function itemImg(state) {
    return {
        height: "40px",
        width: "40px",
        flexDirection: "column",
        backgroundColor: "#242F48",
        ...flexCenter(),
        opacity: state ? "1" : "0.5",
    }
}

function statusImage() {
    return {
        width: "20px",
    }
}

function flexCenter() {
    return {
        display: "flex",
        justifyContent: "center",
    }
}

export default Map;