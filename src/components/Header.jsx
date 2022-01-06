import {useState} from 'react';
import Down from '../assets/Down.png';

function Header({Key, globe, links, services, pages, langs}) {
    let {about, contact, signup} = links;
    let [servicesToggle, setServicesToggle] = useState(false);
    let [pagesToggle, setPagesToggle] = useState(false);

    return <header>
        <div className="Icon">
            <div id="abbr" onClick={() => document.location.assign("/") }>AFF</div>
            <div id="full">ANGRY FROGS FAMILY</div>
        </div>
        
        <ul className="nav">
            <li onClick={() => document.location.assign(about) } className='item'>About</li>
            <li onMouseOver={() => setServicesToggle(true)} onMouseLeave={() => setServicesToggle(false)}>
                <div className='item'>
                    <div>
                        Services
                        <img src={Down} alt="" />
                    </div>
                </div>
                {servicesToggle && <div style={popup()}>
                    {
                        services.map((val, i) => {
                            return <div key={i} style={listItem()} onClick={() => document.location.assign(val[1]) }>
                                {val[0]}
                            </div>
                        })
                    }
                </div>}
            </li>
            <li onMouseOver={() => setPagesToggle(true)} onMouseLeave={() => setPagesToggle(false)}>
                <div className='item'>
                    <div>
                        Pages
                        <img src={Down} alt="" />
                    </div>
                </div>
                { pagesToggle && <div style={popup()}>
                    {
                        pages.map((val, i) => {
                            return <div key={i} style={listItem()} onClick={() => document.location.assign(val[1]) }>
                                {val[0]}
                            </div>
                        })
                    }
                </div>}
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
    }
}

function popup() {
    return {
        position: "fixed",
        width: "400px",
        padding: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        borderTopRightRadius: "20px",
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