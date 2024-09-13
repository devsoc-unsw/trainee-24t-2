import '../App.css';
import { useNavigate } from "react-router-dom";
import {setUserInfo, userInfo} from "./DummyData";

const CreateAccount = () => {
    const navigate = useNavigate();
    const backToLogin = () => {
        navigate("/login")
    };
    const login = () => {
        setUserInfo(userInfo);
        navigate("/dashboard");
    }
    return (
        <>
            <div className='header'>
            <h1>Create an Account</h1>
            <button className="close-button" onClick={backToLogin}>
                x
            </button>
            </div>
            <div className="login-signup-container">
            <p style={{fontSize:"22px"}}>Create an Account</p>
            <input className='username-input' name="username" placeholder='Username'></input>
            <input className='password-input' name="password" placeholder='Password'></input>
            <button className='login-button' onClick={login}>Create Account</button>
            </div>
        </>
    );
}

export default CreateAccount;