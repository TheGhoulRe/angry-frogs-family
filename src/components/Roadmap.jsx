import Map from "./Map";

function Roadmap({questions, answers, states, images, toggle, toggle2, points}) {

    let {plus, minus} = images;

    return <center style={roadMapSection()} id="aniRoadmap">
        <h2>ROADMAP</h2>
        <Map points={points} toggle={toggle2} />
        <h2 style={questionTitle()}>YOU HAVE ANY QUESTIONS?</h2>
        <nav>
            {
                fill(0, questions.length).map(i => {
                    return <li key={i} style={questionList()}>

                        <div style={questionStyle()}>
                            <div style={container()}>
                                <div>{questions[i]}</div>
                                <div onClick={() => toggle(i) }><img src={states[i] ? plus : minus} alt="" style={questionImg()}/></div>
                            </div>
                            
                            {states[i] && <p style={answerText()}>{answers[i]}</p>}
                        </div>

                    </li>
                })
            }
        </nav>
    </center>
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