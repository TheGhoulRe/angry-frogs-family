// import { useEffect } from "react";

// function StackingDevice () {
//     useEffect(() => {
//         let scriptTag = document.createElement("script");
//         scriptTag.innerHTML = `
//             new spine.SpinePlayer("stacking-device", {
//                 jsonUrl: "http://${document.location.host}/assets/Stacking-device-06.json",
//                 atlasUrl: "http://${document.location.host}/assets/Stacking-device-06.atlas",
//             });
//         `;
//         document.body.appendChild(scriptTag);

//         return () => {
//             document.body.removeChild(scriptTag)
//         }
//     });

//     return <div  id="aniStackingDevice" style={stackingDeviceStyle()}>
//         <div id="stacking-device" style={stackingDeviceStyle()}></div>
//     </div>
// }

// function stackingDeviceStyle() {
//     return {
//         width: "100%",
//     }
// }

// export default StackingDevice;


/*******   If the error above is uncomment the above and comment the below  ******/

import StackingDeviceImg from '../assets/StackingDevice.png';

function StackingDevice () {
    return <img src={StackingDeviceImg} alt="" id="aniStackingDevice" style={stackingDevice()} />
}

function stackingDevice() {
    return {
        width: "100%",
    }
}

export default StackingDevice;