import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [invalidPasswordError, setInvalidPasswordError] = useState('');

  const regexForNumber = /\d/;
  const regexForSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

  const isPasswordValid = (password: string) => {
    if (password.length < 8) {
      setInvalidPasswordError('Password must be at least 8 characters long.');
      return false;
    }

    if (!regexForNumber.test(password)) {
      setInvalidPasswordError('Password must contain at least one number.');
      return false;
    }

    if (!regexForSpecialCharacter.test(password)) {
      setInvalidPasswordError(
        'Password must contain at least one special character.',
      );
      return false;
    }

    return true;
  };

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleForm = (e: any) => {
    setForm((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (event: any) => {
    let isValid = true;
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setConfirmPasswordError('Password and Confirm password does not match');
      setForm((old) => {
        return {
          ...old,
          confirmPassword: '',
        };
      });
      isValid = false;
    }
    if (!isPasswordValid(form.password)) {
      setForm((old) => {
        return {
          ...old,
          password: '',
          confirmPassword: '',
        };
      });
      isValid = false;
    }
    if (isValid) {
      // Submit Form
      navigate('/verify-email');
    }
    setValidated(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-100vh">
      <div className="row login-form rounded p-5 border">
        <div className="col">
          <h4 className="text-center f-brand">ART MART</h4>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <Form.Control
                type="email"
                name="email"
                value={form.email}
                required
                placeholder="Enter email"
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                required
                placeholder="Password"
                onChange={handleForm}
              />
              <Form.Text className="text-muted">
                  Password must meet the following criteria:
                  <ul>
                    <li className={form.password.length >= 8 ? 'valid' : ''}>At least 8 characters long.</li>
                    <li className={regexForNumber.test(form.password) ? 'valid' : ''}>Contain at least one number.</li>
                    <li className={regexForSpecialCharacter.test(form.password) ? 'valid' : ''}>Contain at least one special character (!@#$%^&*).</li>
                  </ul>
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {invalidPasswordError
                  ? invalidPasswordError
                  : 'Please provide a password.'}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                required
                placeholder="Rewrite your password"
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                {confirmPasswordError
                  ? confirmPasswordError
                  : 'Please rewrite your password.'}
              </Form.Control.Feedback>
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
