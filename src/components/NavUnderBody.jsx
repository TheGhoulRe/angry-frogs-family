
function NavUnderBody({title, firstSet, secondSet}) {
    return (
        <div id="navUnderBody">
            <center>
                <h3>{title}</h3>
                <nav id="cards" style={card()}>
                    {
                        [0, 1, 2, 3].map(i => {
                            let {images, stats, statName} = firstSet;

                            return <li id="card" style={cardsCards()} key={i}>
                                <center>
                                    <img src={images[i]} alt="" style={icon()} />
                                    <div id="text">{stats[i]}</div>
                                    <div id="type">{statName[i]}</div>
                                </center>
                            </li>
                        })
                    }
                </nav>
                <nav id="cards" style={card()}>
                    {
                        [0, 1, 2, 3].map(i => {
                            let {images, stats, statName} = secondSet;

                            return <li id="card" style={cardsCards()} key={i + 4}>
                                <center>
                                    <img src={images[i]} alt="" style={icon()}/>
                                    <div id="text">{stats[i]}</div>
                                    <div id="type">{statName[i]}</div>
                                </center>
                            </li>
                        })
                    }
                </nav>
            </center>
        </div>
    );
}

function cardsCards() {
    return {
        width: "100px",
        height: "150px",
        margin: "5px",
        padding: "10px",
        borderRadius: "0.4em",
        backgroundColor: "#1A2234",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "150px",
        height: "200px",
    }
}

function card() {
    return {
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
    }
}

function icon() {
    return {
        width: "70px",
    }
}

export default NavUnderBody;