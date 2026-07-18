import { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});

    const validate = () => {

        let tempErrors = {};

        // Name Validation
        if (name.length < 5) {
            tempErrors.name = "Name should have at least 5 characters";
        }

        // Email Validation
        if (!(email.includes("@") && email.includes("."))) {
            tempErrors.email = "Enter a valid Email";
        }

        // Password Validation
        if (password.length < 8) {
            tempErrors.password = "Password should have at least 8 characters";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        if (validate()) {

            alert("Registration Successful!");

            setName("");
            setEmail("");
            setPassword("");
            setErrors({});
        }
    };

    return (

        <div style={{ margin: "20px" }}>

            <h2>Mail Register App</h2>

            <form onSubmit={handleSubmit}>

                <div>

                    <label>Name</label>

                    <br />

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br />

                    <span style={{ color: "red" }}>
                        {errors.name}
                    </span>

                </div>

                <br />

                <div>

                    <label>Email</label>

                    <br />

                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />

                    <span style={{ color: "red" }}>
                        {errors.email}
                    </span>

                </div>

                <br />

                <div>

                    <label>Password</label>

                    <br />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />

                    <span style={{ color: "red" }}>
                        {errors.password}
                    </span>

                </div>

                <br />

                <button type="submit">
                    Register
                </button>

            </form>

        </div>

    );
}

export default Register;