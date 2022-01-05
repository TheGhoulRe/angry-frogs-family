import { useState } from "react";

function PreText({image, text, color, onClick}) {

    let [onBadge, setOnBadge] = useState(false);

    return <div style={badgeStyleSheet(onBadge)} onClick={onClick} onMouseLeave={() => setOnBadge(false)} onMouseOver={() => setOnBadge(true)}>
        <div style={imageSectionStylesheet()}>
            <div style={horizontalCenterizer()}>

                {/* The ellipse begining */}
                <div style={iconStylesheet(color)}>
                    <div style={containerStyle()}>
                        <img src={image} alt="." style={imageStylesheet()} />
                    </div>
                </div>
                {/* The ellipse end */}

            </div>
            <div style={textStylesheet()}>{text}</div>
        </div>
    </div>
}

function horizontalCenterizer() {
    return {
        display: "flex",
        justifyContent: "center",
    }
}

function badgeStyleSheet(onBadge) {
    return {
        width: "85px",
        height: "78px",
        background: " rgba(196, 196, 196, 0.1)",
        borderRadius: "5px",
        ...horizontalCenterizer(),
        paddingTop: "10px",
        margin: "5px",
        transform: "scale(" + (onBadge ? '1.1' : '1') + ")",
        transition: "transform 0.3s ease-in-out",
    }
}

function imageSectionStylesheet() {
    return {
        alignContent: "center",
    }
}

function iconStylesheet (color) {
    return {
        backgroundColor: color,
        borderRadius: "5rem",
        height: "50px",
        width: "50px",
        ...horizontalCenterizer(),
        flexDirection: "column",
    }
}

function containerStyle() {
    return {
        textAlign: "center",
    }
}

function imageStylesheet() {
    return {
        width: "25px",
        height: "25px",
    }
}

function textStylesheet() {
    return {
        marginTop: "5px",
        fontSize: "12px",
        textAlign: "center",
    }
}

export default PreText;