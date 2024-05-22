import React from "react";
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="sign">Sign in</h1>
       
        <span>Enter your Email and Password to Signin!</span>
        <label htmlFor="username">Username:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="flex">
        <div>
        <input
          type="checkbox"
          id="keepLoggedIn"
          />
        <label htmlFor="keepLoggedIn">Keep me logged in</label>
        </div>
        <a href="#">Forgot your password?</a>
      </div>
     
        
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
