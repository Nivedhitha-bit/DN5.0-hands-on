import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

function App() {

    const players = [

        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 91 },
        { name: "KL Rahul", score: 68 },
        { name: "Hardik Pandya", score: 75 },
        { name: "Ravindra Jadeja", score: 64 },
        { name: "Rishabh Pant", score: 88 },
        { name: "Surya Kumar", score: 92 },
        { name: "Jasprit Bumrah", score: 45 },
        { name: "Mohammed Shami", score: 60 },
        { name: "Mohammed Siraj", score: 78 }

    ];

    const IndianTeam = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    const T20players = [
        "Surya Kumar",
        "Rishabh Pant",
        "Jasprit Bumrah"
    ];

    const RanjiTrophyPlayers = [
        "Cheteshwar Pujara",
        "Ajinkya Rahane",
        "Hanuma Vihari"
    ];

    const IndianPlayers = [
        ...T20players,
        ...RanjiTrophyPlayers
    ];

    const flag = true;

    if (flag === true) {

        return (

            <div>

                <h1>List of Players</h1>

                <ListofPlayers players={players} />

                <hr />

                <h1>List of Players having Scores Less than 70</h1>

                <Scorebelow70 players={players} />

            </div>

        );

    }
    else {

        return (

            <div>

                <div>

                    <h1>Indian Team</h1>

                    <h2>Odd Players</h2>

                    {OddPlayers(IndianTeam)}

                    <hr />

                    <h2>Even Players</h2>

                    {EvenPlayers(IndianTeam)}

                </div>

                <hr />

                <div>

                    <h1>List of Indian Players Merged</h1>

                    <ListofIndianPlayers IndianPlayers={IndianPlayers} />

                </div>

            </div>

        );

    }

}

export default App;