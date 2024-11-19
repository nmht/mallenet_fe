export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="illustration">
        <img src="illustration.png" alt="Illustration" />
      </div>
      <div className="login-form">
        <h1>Welcome!</h1>
        <p>Sign in to your Account</p>
        <form>
          <div className="input-field">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" required />
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <div className="buttons">
            <button type="button" className="btn sign-in">Sign In</button>
            <button type="button" className="btn sign-up">Sign Up</button>
          </div>
          <p className="or-login-with">OR LOGIN WITH</p>
          <div className="social-buttons">
            <button className="social-btn fb">Facebook</button>
            <button className="social-btn google">Google</button>
            <button className="social-btn linkedin">LinkedIn</button>
          </div>
        </form>
      </div>
    </div>
  );
}



  

