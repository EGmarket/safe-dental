import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    signInUsingGoogle,
    signInUsingGitHub,
    signInUsingFacebook,
    processLogin,
    createNewUser,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  // ToggleLogin
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  // handle event with email and password
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("Registration Clicked");
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    })
    .catch(error => {
      console.log(error.message);
    })
    
  };

  // Handle Github Login
  const handleGithubLogin = () => {
    signInUsingGitHub().then((result) => {
      history.push(redirect_uri);
    })
    .catch(error => {
      console.log(error.message);
    })
  };

 
  return (
    <div className="container w-50">
      <Row >
        <Col>
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
        </Col>
      </Row>

      <div className="mt-5 d-flex justify-content-center">
        
        <div className="d-flex">
        <h3>Sign In With</h3>
        <button
          className="btn btn-dark mx-2 d-flex justify-content-center"
          onClick={handleGoogleLogin}
        >
          
          <FontAwesomeIcon
            icon={faGoogle}
            size="2x"
            className="text-danger"
          />
          <span className="mx-4 mt-1">Google Sign In</span>
        </button>
        <button
          className="btn btn-secondary mx-2 d-flex justify-content-center"
          onClick={handleGithubLogin}
          >

          <FontAwesomeIcon icon={faGithub} size="2x" className="text-dark" />
          <span className="mx-4 mt-1">Github Sign In</span>
        </button>
       
        <br />
      </div>
      </div>
    </div>
  );
};

export default Login;
