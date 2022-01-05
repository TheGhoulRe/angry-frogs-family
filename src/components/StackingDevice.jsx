
function StackingDevice({stackingDeviceImg}) {
    return <>
        <img style={stackingDeviceStyle()} src={stackingDeviceImg} alt="" id="aniStackingDevice" />
    </>
}

function stackingDeviceStyle() {
    return {
        width: "100%",
    }
}

export default StackingDevice;