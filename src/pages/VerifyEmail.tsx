import { useState, useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function VerifyEmail() {
  const [seconds, setSeconds] = useState(60);
  // Decrease seconds value every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [seconds]);
  const [otp, setOtp] = useState<string[]>([]); // State variable to store OTP
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (event: any, index: number) => {
    const { value } = event.target;

    // Check for backspace key (keyCode 8) and move to the previous input
    if (event.nativeEvent.inputType === 'deleteContentBackward' && index > 0) {
      // Clear the current input and move focus to the previous input
      const updatedOtp = [...otp];
      updatedOtp[index] = '';
      setOtp(updatedOtp);
      inputRefs.current[index]?.focus();
      return;
    }

    // Check if the entered value is a number between 0 and 9
    if (/^[0-9]$/.test(value)) {
      // Update the OTP state
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Focus on the next input field if a character is entered
      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      // Clear the input if it's not a number between 0 and 9
      event.target.value = '';
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('OTP:', otp.join('')); // Print the OTP when the form is submitted
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-100vh">
      <div className="row login-form rounded p-5 border">
        <div className="col">
          <h4 className="text-center f-brand">ART MART</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter OTP</Form.Label>

              <div className="d-flex justify-content-between">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Form.Control
                    key={index}
                    className="otp-box"
                    value={otp[index] || ''}
                    type="text"
                    min={0}
                    onChange={(event) => handleChange(event, index)}
                    ref={(inputRef: any) =>
                      (inputRefs.current[index] = inputRef)
                    }
                  />
                ))}
              </div>
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="primary"
                type="submit"
                className="f-brand"
                disabled={otp.join('').length === 6 ? false : true}
              >
                Verify OTP
              </Button>
            </div>
          </Form>
          <hr className="my-4"></hr>
          <p className="text-center">
            {seconds === 0 ? (
              <Button
                variant="link"
                className="f-brand p-0 pb-1 text-decoration-none"
              >
                Resend
              </Button>
            ) : (
              <>
                Didn't receive OTP? <span className="f-brand cp">Resend</span>{' '}
                in {seconds} seconds.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
