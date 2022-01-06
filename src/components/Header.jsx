import Down from '../assets/Down.png';

function Header({Key, globe, links, services, pages, langs}) {
    let {about, contact, signup} = links;

    return <header style={{ padding: "0px", position: "absolute", top: "0px", width: "100%" }}>
        <div className="Icon">
            <div id="abbr" onClick={() => document.location.assign("/") }>AFF</div>
            <div id="full">ANGRY FROGS FAMILY</div>
        </div>
        
        <ul className="nav">
            <li onClick={() => document.location.assign(about) } className='item'>About</li>
            <li className='body'>
                <div className='item'>
                    <div>
                        Services
                        <img src={Down} alt="" />
                    </div>
                </div>
                <div style={popup()} id="popup">
                    {
                        services.map((val, i) => {
                            return <div key={i} style={listItem()} onClick={() => document.location.assign(val[1]) }>
                                {val[0]}
                            </div>
                        })
                    }
                </div>
            </li>
            <li className='body'>
                <div className='item'>
                    <div>
                        Pages
                        <img src={Down} alt="" />
                    </div>
                </div>
                <div style={popup()} id="popup">
                    {
                        pages.map((val, i) => {
                            return <div key={i} style={listItem()} onClick={() => document.location.assign(val[1]) }>
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