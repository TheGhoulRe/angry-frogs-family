
import { useEffect } from "react";

function BodysSpine () {
    useEffect(() => {
        let scriptTag = document.createElement("script");
        scriptTag.innerHTML = `
            new spine.SpinePlayer("body-spine", {
                jsonUrl: "./assets/Frog Gangster Firing 04.json",
                atlasUrl: "./assets/Frog Gangster Firing 04.atlas",

                showControls: false,
                // animation: "shoot",
            });
        `;
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        }
    });
  
    return <div style={bodySpineStyle()} id="bg">
        <div id="body-spine" style={img()}></div>
    </div>
}

function img() {
    return {
        transform: "scale(1.35)",
    }
}

function bodySpineStyle() {
    return {
        width: "100%",
        height: "100%"
    }
}

export default BodysSpine;