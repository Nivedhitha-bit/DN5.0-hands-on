import React, { Component } from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoggedIn: false

        };

    }

    login = () => {

        this.setState({

            isLoggedIn: true

        });

    };

    logout = () => {

        this.setState({

            isLoggedIn: false

        });

    };

    render() {

        let page;

        let button;

        if (this.state.isLoggedIn) {

            page = <UserPage />;

            button = (

                <button onClick={this.logout}>

                    Logout

                </button>

            );

        }
        else {

            page = <GuestPage />;

            button = (

                <button onClick={this.login}>

                    Login

                </button>

            );

        }

        return (

            <div style={{ margin: "20px" }}>

                {button}

                <hr />

                {page}

            </div>

        );

    }

}

export default App;