function FlightDetails() {

    return (

        <div>

            <h2>Flight Details</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Flight</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Fare</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹6500</td>

                    </tr>

                    <tr>

                        <td>6E205</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>₹4500</td>

                    </tr>

                    <tr>

                        <td>SG310</td>
                        <td>Hyderabad</td>
                        <td>Kolkata</td>
                        <td>₹5200</td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default FlightDetails;