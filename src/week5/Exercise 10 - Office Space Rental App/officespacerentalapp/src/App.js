import officeImage from "./images/office.jpg";

function App() {

    const office = {
        name: "Skyline Business Center",
        rent: 55000,
        address: "Anna Nagar, Chennai"
    };

    const officeSpaces = [

        {
            name: "Skyline Business Center",
            rent: 55000,
            address: "Anna Nagar, Chennai"
        },

        {
            name: "Tech Park",
            rent: 75000,
            address: "Electronic City, Bangalore"
        },

        {
            name: "Innovation Hub",
            rent: 45000,
            address: "Hitech City, Hyderabad"
        },

        {
            name: "Global Towers",
            rent: 90000,
            address: "MG Road, Bengaluru"
        }

    ];

    return (

        <div style={{ padding: "20px" }}>

            <h1>Office Space Rental App</h1>

            <img
                src={officeImage}
                alt="Office"
                width="400"
            />

            <hr />

            <h2>Office Details</h2>

            <p><b>Name :</b> {office.name}</p>

            <p
                style={{
                    color:
                        office.rent < 60000
                            ? "red"
                            : "green"
                }}
            >
                <b>Rent :</b> ₹{office.rent}
            </p>

            <p><b>Address :</b> {office.address}</p>

            <hr />

            <h2>Available Office Spaces</h2>

            {

                officeSpaces.map((space, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid gray",
                            margin: "15px",
                            padding: "15px"
                        }}
                    >

                        <h3>{space.name}</h3>

                        <p
                            style={{
                                color:
                                    space.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            <b>Rent :</b> ₹{space.rent}
                        </p>

                        <p>
                            <b>Address :</b> {space.address}
                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default App;