function ListofPlayers(props) {

    return (

        <div>

            {
                props.players.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))
            }

        </div>

    );

}

export default ListofPlayers;