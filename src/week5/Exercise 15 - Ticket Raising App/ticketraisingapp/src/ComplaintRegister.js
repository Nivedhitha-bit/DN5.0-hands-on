import { useState } from "react";

function ComplaintRegister() {

    const [employeeName, setEmployeeName] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        if (employeeName.trim() === "" || complaint.trim() === "") {
            alert("Please fill all the fields.");
            return;
        }

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint Raised Successfully!\n\nEmployee Name: ${employeeName}\nReference Number: ${referenceNumber}`
        );

        setEmployeeName("");
        setComplaint("");
    };

    return (

        <div style={{ margin: "20px" }}>

            <h2>Ticket Raising App</h2>

            <form onSubmit={handleSubmit}>

                <div>

                    <label>Employee Name:</label>

                    <br /><br />

                    <input
                        type="text"
                        value={employeeName}
                        onChange={(e) =>
                            setEmployeeName(e.target.value)
                        }
                    />

                </div>

                <br />

                <div>

                    <label>Complaint:</label>

                    <br /><br />

                    <textarea
                        rows="5"
                        cols="40"
                        value={complaint}
                        onChange={(e) =>
                            setComplaint(e.target.value)
                        }
                    />

                </div>

                <br />

                <button type="submit">
                    Submit Complaint
                </button>

            </form>

        </div>

    );
}

export default ComplaintRegister;