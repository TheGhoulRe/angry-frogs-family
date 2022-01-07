import NavItems from "./NavItems";

import Discord from "../assets/Discord.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Tweet.svg";
import Email from "../assets/Email.svg";
import Forward from "../assets/Forward.svg";

function Footer() {

    let categories = [
            ["History", "/"],
            ["Events", "/"],
            ["Partners", "/"],
            ["Payments", "/"],
        ],
        usefulLinks = [
            ["Payment & Tax", "/"],
            ["Terms of service", "/"],
            ["My Account", "/"],
            ["Discount", "/"],
        ],
        resources = [
            ["Blog", "/"],
            ["Whitepaper", "/"],
            ["Reports", "/"],
        ];

    const discordLink = "/";
    const twitterLink = "/";
    const facebookLink = "/";

    let privacyPolicy = "/", t_and_c = "/";
    
    return <footer style={footer()} id="footer">
        <div style={menus()}>
            <div>
                <h1 style={title()}>AFF</h1>
                <div>
                    <img src={Twitter} alt="" onClick={() => document.location.assign(discordLink)} />
                    <img src={Discord} alt="" onClick={() => document.location.assign(twitterLink)} />
                    <img src={Facebook} alt="" onClick={() => document.location.assign(facebookLink)} />
                </div><br />
                <div>Get on the List</div>
                <form style={emailSection()}>
                    <span  style={emailIcon()}>
                        <img src={Email} alt="" />
                    </span>
                    <input type="text" placeholder="Email Address..." style={input()}/>
                    <button type="submit" style={button()}>
                        <img src={Forward} alt="" />
                    </button>
                </form>
            </div>
            <NavItems title="Categories" items={categories} />
            <NavItems title="Useful Links" items={usefulLinks} />
            <NavItems title="Resources" items={resources} />
        </div>

        <div style={footersFooter()}>
            <div>
                © 2022 
                <a href="http://angryfrogs.io" style={link()}> angryfrogs.io</a>
            </div>
            <div>
                <a href={privacyPolicy} style={customLook()}>Privacy Policy</a> | 
                <a href={t_and_c} style={customLook()}>  Terms & Conditions</a>
            </div>
        </div>
    </footer>
}

function link() {
    return {
        color: "white",
        textDecorationLine: "none",
    }
}

function customLook() {
    return {
        color: "white",
        textDecorationLine: "none",
    }
}

function button() {
    return {
        backgroundColor: "transparent",
        border: "none",
        paddingRight: "15px",
        paddingLeft: "15px",
    }
}

function input() {
    return {
        backgroundColor: "black",
        color: "white",
        border: "none",
        padding: "10px",
        paddingLeft: "30px",
    }
}

function footer() {
    return {
        borderTop: "1px solid gray",
        display: "flex",
        flexDirection: "column",
    }
}

function title() {
    return {
        color: "#DB2A2B"
    }
}

function menus() {
    return {
        paddingLeft: "100px",
        paddingRight: "100px",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "30px",
        paddingTop: "30px",
    }
}

function footersFooter() {
    return {
        backgroundColor: "#1A1A1A",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "100px",
        paddingRight: "100px",
    }
}

function emailIcon() {
    return {
        position: "absolute",
        verticalAlign: "middle",
        paddingLeft: "10px",
        paddingTop: "8px",
    }
}

function emailSection() {
    return {
        backgroundColor: "#141A28",
        padding: "2px",
    }
}

export default Footer;