function Scorebelow70(props) {

    const lowScorePlayers = props.players.filter(
        player => player.score < 70
    );

    return (

        <div>

            {
                lowScorePlayers.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))
            }

        </div>

    );

}

export default Scorebelow70;