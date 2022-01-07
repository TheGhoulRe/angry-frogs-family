
import StakingDeviceImg from '../assets/StakingDevice.gif';

function StakingDevice () {
    return <div id="aniStakingDevice" style={{backgroundColor: "white", ...stakingDevice()}} >
        <img src={StakingDeviceImg} alt="" />
    </div> 
}

function stakingDevice() {
    return {
        height: "400px",
        display: "flex",
        padding: "20px",
        justifyContent: "center",
    }
}

export default StakingDevice;