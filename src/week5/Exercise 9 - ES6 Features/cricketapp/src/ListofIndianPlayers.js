function ListofIndianPlayers(props) {

    return (

        <div>

            {
                props.IndianPlayers.map((player, index) => (

                    <p key={index}>
                        {player}
                    </p>

                ))
            }

        </div>

    );

}

export default ListofIndianPlayers;