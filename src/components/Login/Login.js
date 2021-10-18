import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const [isLogin , setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const {
    signInUsingGoogle,
    signInUsingGitHub,
    signInUsingFacebook,
    processLogin,
    createNewUser
  } = useAuth();

  // ToggleLogin
  const toggleLogin = e =>{
    setIsLogin(e.target.checked);
  }

  // handle event with email and password
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("Registration Clicked");
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };

  const handleEmail = e =>{
    setEmail(e.target.value)
    
  }

  const handlePassword = e =>{
    setPassword(e.target.value)
  }

  return (
    <div className="container w-25">
      <Form onSubmit={handleRegistration}>
        <h3>Please {isLogin ? "Login" : "Register"}</h3>
        {!isLogin && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a name"
            //   onBlur={handleNameChange}
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onBlur={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={toggleLogin}
            type="checkbox"
            label="Already User ?"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLogin ? "Login" : "Register"}
        </Button>
      </Form>

      <div className="mt-5">
      <Button className="mx-2" onClick={signInUsingGoogle}>Google Sign In</Button>
      </div>
    </div>
  );
};

export default Login;
