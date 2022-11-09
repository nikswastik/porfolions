import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export const Login = () => {

    const [username, setUsername] = useState("")
    const [Password,setPassword]=useState("")


    let email;
    const onLogin = () => {
        alert(username)
    };

    const nameHandler = (name) => {
        setUsername(name.target.value);
        console.log(username);
    };



    const emailHandler = (name) => {
        email = name.target.value;
        console.log(email);
    };

    const passwordHandler = (name) => {
        setPassword(name.target.value);
        // console.log(Password);
    };

    const clearUserName = () => {
        setUsername(" ");
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-left-cntr">
                    <TextField
                        className="tex-inp"
                        id="outlined-basic"
                        value={username}
                        label="Name"
                        variant="outlined"
                        onChange={nameHandler}
                    />
                    <TextField
                        className="tex-inp"
                        id="outlined-basic"
                        label="Email"
                        value={email}
                        variant="outlined"
                        onChange={emailHandler}
                    />
                    <TextField
                        className="tex-inp"
                        id="outlined-basic"
                        label="Password"
                        value={Password}
                        variant="outlined"
                        onChange={passwordHandler}
                    />
                    <Button className="login-btn" variant="contained" onClick={onLogin}>
                        Login
                    </Button>

                    <Button className="login-btn" variant="contained" onClick={clearUserName}>
                        check value
                    </Button>
                </div>

                <div className="login-right-cntr">
                    <img
                        className="lg-right-img"
                        src={
                            "https://img.freepik.com/free-vector/gradient-abstract-geometric-background-layered_530521-731.jpg?w=2000&t=st=1665218643~exp=1665219243~hmac=80fa7848934675cb9644975db90f28e1f4f6bfdc46e895fc7eb78cbcd45950f8"
                        }
                    />
                </div>
            </div>
        </div>
    );
};
