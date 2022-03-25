import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Register</h3>
                <span className="loginDesc">Its fast and easy.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Register</button>
            
                </div>
            </div>
        </div>
    </div>
  )
}
