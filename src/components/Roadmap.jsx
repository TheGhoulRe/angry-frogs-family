import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import Map from "./Map";
import { useState } from 'react';

function Roadmap() {

    let [points, setPoints] = useState( [
        [false, "Owners of Angry Frogs will get access to a private discord channel reserved only for them."],
        [false, "The community wallet will be utilized for a number of purposes to ensure the long- term viability of the project."],
        [false, "The AFF Merch Store, which has Limited Edition shirts, hoodies, and other goods, becomes available to members only."],
        [false, "Amazon's public sales have already opened."],
        [false, "Families' Headquarters on the Metaverse, where each family has its own territory."],
        [false, "The more you participate in Discord, the higher your level will be, and as you accomplish certain points, your rank will improve. As a result, you'll start collecting passive Income from AFF secondary market Sales."],
        [false, "Metaverse parties including a variety of artists, musicians, and DJs will be held for the benefit of the community members."],
        [false, "‘Play to Earn’ A game in which participants earn money by playing against other families."],
    ]);

    let [states, setStates] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    let questions = [
            "How can I join the family?",
            "How can i transfer coins to account?",
            "How can i transfer coins to account?",
            "How do i get La Famiglia identification card?", 
            "What is the best way to protect my account?",
            "How can i withdraw my coins?",
        ],
        answers = [
            "NA", 
            "NA", 
            "NA", 
            "NA", 
            "NA", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum dictum nulla, sed vehicula lacus interdum non. Maecenas imperdiet interdum nibh eget suscipit. Nam hendrerit gravida diam, quis lobortis lectus scelerisque nec. Sed id malesuada elit. Suspendisse tristique mi sit amet metus hendrerit mattis.",
        ];

    return <center style={roadMapSection()} id="aniRoadmap">
        <h2>ROADMAP</h2>
        <Map points={points} toggle={(i) => setPoints( toggle2(i, points) )} />
        <h2 style={questionTitle()}>YOU HAVE ANY QUESTIONS?</h2>
        <nav>
            {
                fill(0, questions.length).map(i => {
                    return <li key={i} onClick={() => setStates( toggle(i, states) ) } style={questionList()}>

                        <div style={questionStyle()}>
                            <div style={container()}>
                                <div>{questions[i]}</div>
                                <div><img src={!states[i] ? plus : minus} alt="" style={questionImg()}/></div>
                            </div>
                            
                            {states[i] && <p style={answerText()}>{answers[i]}</p>}
                        </div>

                    </li>
                })
            }
        </nav>
    </center>
}

function toggle(i, states) {
    const newStates = [...states];
    newStates[i] = !newStates[i];
    return newStates;
}
  
function toggle2(i, points) {
    const newPoints = [...points];
    newPoints[i][0] = !newPoints[i][0];
    return newPoints;
}
  

function roadMapSection() {
    return {
        overflowX: "hidden",
    }
}

function fill(start, end) {
    return (start === end) ? [] : [start, ...fill(start + 1, end)];
}

function questionTitle() {
    return {
        paddingBottom: "20px",
    }
}

function questionList() {
    return {
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
    }
}

function questionStyle() {
    return {
        width: "80%",
        margin: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "2px solid #141A28",
    }
}

function container() {
    return {
        backgroundColor: "#141A28",
        textAlign: "left",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
    }
}

function answerText() {
    return {
        width: "100%",
    }
}

function questionImg() {
    return {
        width: "18px",
    }
}

export default Roadmap;