import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="d-flex align-items-center justify-content-center min-100vh">
      <div className="row login-form rounded p-5 border">
        <div className="col">
          <h4 className="text-center f-brand">ART MART</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Re-write your password" />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" className="f-brand">
                SignUp
              </Button>
            </div>

          </Form>
          <hr className="my-4"></hr>
          <p className="text-center">
            Already have an account? <br></br>
            <Link to="/login" className="f-brand">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
