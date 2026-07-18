import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                name="Nivedhithasri"
                school="Sona College of Technology"
                total={480}
                goal={5}
            />
        </div>
    );
}

export default App;