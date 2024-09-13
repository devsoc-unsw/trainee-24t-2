import '../App.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/dashboard");
  }
  const createAccount = () => {
    navigate("/create-account");
  }

  return (
    <>
      <div className='header' style={{display: "block", textAlign:"center"}}>
        <h1>Welcome to StudyPal!</h1>
        <p>The collaborative study platform.</p>
      </div>
      <div className="login-signup-container">
        <p style={{fontSize:"22px"}}>Login or create an account</p>
        <input className='username-input' name="username" placeholder='Username'></input>
        <input className='password-input' name="password" placeholder='Password'></input>
        <button className='login-button' onClick={login}>Login</button>
        <p className='login-subtext'>Don't have an account?</p>
        <a style={{color:"#8C67E8", margin:"auto", display:"block"}} className='login-subtext' onClick={createAccount}>Sign Up</a>
      </div>
    </>
  )
}

export default LoginPage;