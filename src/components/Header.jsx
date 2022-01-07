import Down from '../assets/Down.png';
import Key from '../assets/key.svg';
import globe from '../assets/globe.svg';

function Header() {

    const  links = {
        about: "#about",
        contact: "#footer",
        signup: "#teamView",
    },
    services = [
        ["service1", "/"],
        ["service2", "/"],
        ["service3", "/"],
    ],
    pages = [
        ["page1", "/"],
        ["page2", "/"],
        ["page3", "/"],
    ],
    langs = [
        ["lang1", "/"],
        ["lang2", "/"],
        ["lang3", "/"],
    ];

    let {about, contact, signup} = links;

    return <header style={headerStyling()}>
        <div className="Icon">
            <div id="abbr" onClick={() => document.location.assign("/") }>AFF</div>
            <div id="full">ANGRY FROGS FAMILY</div>
        </div>
        
        <ul className="nav">
            <li onClick={() => document.location.assign(about) } className='item'>About</li>
            <li className='body' onClick={handleClick}>
                <div className='item'>
                    <div>
                        Services
                        <img src={Down} alt="" />
                    </div>
                </div>
                <div style={popup()} id="popup">
                    {
                        services.map((val, i) => {
                            return <div key={i} id='popupItem' style={listItem()} onClick={() => document.location.assign(val[1]) }>
                                {val[0]}
                            </div>
                        })
                    }
                </div>
            </li>
            <li className='body' onClick={handleClick}>
                <div className='item'>
                    <div>
                        Pages
                        <img src={Down} alt="" />
                    </div>
                </div>
                <div style={popup()} id="popup">
                    {
                        pages.map((val, i) => {
                            return <div key={i} id='popupItem' style={listItem()} onClick={() => document.location.assign(val[1]) }>
                                {val[0]}
                            </div>
                        })
                    }
                </div>
            </li>
            <li onClick={() => document.location.assign(contact) } className='item'>Contact</li>
        </ul>
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="Intro" >
                <img src={Key} alt="" style={icon()}/>
                <button onClick={() => document.location.assign(signup) }>
                    Sign Up
                </button>
                <img src={globe} alt="" style={icon()}/>
                <div className='item' style={lang()}>
                    <select id="lang" style={langText()}>
                        {
                            langs.map((val, i) => {
                                return <option key={i} value={val[0]} onClick={() => document.location.assign(val[1]) }>
                                    {val[0]}
                                </option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    </header>
}

function handleClick(e) {
    if ( !e.currentTarget.classList.contains("bodyClicked") ){
        e.currentTarget.classList.add("bodyClicked");
    } else {
        e.currentTarget.classList.remove("bodyClicked");
    }
}

function headerStyling() {
    return {
        padding: "0px",
        position: "absolute",
        top: "0px",
        width: "100%"
    }
}

function langText() {
    return {
        backgroundColor: "transparent",
        color: "inherit",
    }
}

function lang() {
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
}

function listItem() {
    return {
        fontSize: "large",
        cursor: "pointer",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "20px",
        transition: "background-color 0.2s linear, color 0.2s linear"
    }
}

function popup() {
    return {
        position: "fixed",
        width: "400px",
        paddingTop: "20px",
        paddingBottom: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        backgroundColor: "#000000",
    }
}

function icon() {
    return {
        width: "19px",
        verticalAlign: "middle",
    }
}

export default Header;