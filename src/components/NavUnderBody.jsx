import NFT from '../assets/NFT.png';
import Tweet from "../assets/Tweet.svg";
import People from '../assets/People.png';
import Chat from '../assets/Chat.png';

function NavUnderBody() {

    let title = "WHY YOU CHOOSING AFF?",
        firstSet = {
            images: [NFT, Chat, People, Tweet],
            stats: ["15k", "90%", "+200k", "+100k"],
            statName: ["NFTs Distributed", "Positive Feedback", "Followers", "Twitter Contest"],
        },
        secondSet = {
            images: [People, Tweet, NFT, Chat,],
            stats: ["+200k", "+100k", "15k", "90%",],
            statName: ["Followers", "Twitter Contest", "NFTs Distributed", "Positive Feedback",],
        };

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