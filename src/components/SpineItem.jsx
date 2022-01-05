import { useEffect } from "react";

function SpineItem () {
    useEffect(() => {
        let scriptTag = document.createElement("script");
        scriptTag.innerHTML = `
            new spine.SpinePlayer("player-container", {
                jsonUrl: "./assets/Frog Gangster Firing 04.json",
                atlasUrl: "./assets/Frog Gangster Firing 04.atlas",

                showControls: false,
                animation: "shoot",
            });
        `;
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag)
        }
    });

    return <div id="background">
        <div id="player-container"></div>
    </div>
}

export default SpineItem;