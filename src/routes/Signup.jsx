import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const localData = JSON.parse(localStorage.getItem("userData")) || [];
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [signupErrors, setSignupErrors] = useState({});
  const handleSignup = (e) => {
    e.preventDefault();
    if (!userData.username) {
      setSignupErrors({
        ...signupErrors,
        username: "Username is required",
      });
    } else if (!userData.email) {
      setSignupErrors({
        ...signupErrors,
        email: "Email is required",
      });
    } else if (!emailRegex.test(userData.email)) {
      setSignupErrors({
        ...signupErrors,
        email: "Email is not valid",
      });
    } else if (!userData.password) {
      setSignupErrors({
        ...signupErrors,
        password: "Password is required",
      });
    } else if (userData.password !== userData.confirmPassword) {
      setSignupErrors({
        ...signupErrors,
        confirmPassword: "Passwords do not match",
      });
    } else {
      localData.push(userData);
      localStorage.setItem("userData", JSON.stringify(localData));
      navigate("/login");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <Form onSubmit={(e) => handleSignup(e)}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
            }}
            value={userData.username}
          />
          <p className="text-danger">{signupErrors.username}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
            value={userData.email}
          />
          <p className="text-danger">{signupErrors.email}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            value={userData.password}
          />
          <p className="text-danger">{signupErrors.password}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setUserData({ ...userData, confirmPassword: e.target.value });
            }}
            value={userData.confirmPassword}
          />
          <p className="text-danger">{signupErrors.confirmPassword}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={"/login"}>Already registered? Login!</Link>
      </Form>
    </div>
  );
};
export default Signup;
