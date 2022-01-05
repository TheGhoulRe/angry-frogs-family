
function NavItems({ title, items }) {
    return <div>
        <div>{title}</div>
        <br />
        <nav style={list()}>
            {
                items.map((val, i) => {
                    let [name, link] = val;
                    return <li key={i} style={item()}>
                        <small>
                            <a href={link} style={customLook()}>{name}</a>
                        </small>
                    </li>
                })
            }
        </nav>
    </div>
}

function list() {
    return {
        color: "white",
        listStyleType: "none",
    }
}

function customLook() {
    return {
        color: "white",
        textDecorationLine: "none",
    }
}

function item() {
    return {
        marginTop: "10px",
        marginBottom: "10px",
    }
}

export default NavItems;