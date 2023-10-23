import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    // if (
    //   userData.username !== loginData.username &&
    //   userData.password !== loginData.password
    // ) {
    //   setLoginErrors("Invalid credentials");
    // } else {
    //   alert("Login successful");
    //   navigate("/homepage");
    // }
    const isRegistered = userData.find(
      (user) => user.email === loginData.email
    );
    const isMatched = userData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (!isRegistered) {
      setLoginErrors("User not found");
    } else if (!isMatched) {
      setLoginErrors("Invalid Credentials");
    } else {
      alert("Login successful");
      navigate("/homepage");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </Form.Group>
        <p className="text-danger">{loginErrors}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={"/"}>New User? Register Now!</Link>
      </Form>
    </div>
  );
};

export default Login;
