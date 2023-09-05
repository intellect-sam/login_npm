import { FormEventHandler, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthSDK } from '../services/AuthSDK';

function LoginPage() {
  const [inputField, setInputField] = useState({
    username: '',
    password: '',
    deviceId: 'RP1A.200720.011',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    const SDK = new AuthSDK();
    SDK.login(inputField)
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />

          <p>Go to Home</p>
        </section>
      ) : (
        <div
          className=" d-flex justify-content-center align-items-center w-150"
          style={{ height: '100vh' }}>
          <Container>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                controlId="formBasicEmail"
                className="mb-3">
                <Form.Label className="text-left">Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={inputField.username}
                  onChange={handleChange}
                  name="userName"
                  required
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="mb-3">
                <Form.Label className="text-left">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={inputField.password}
                  onChange={handleChange}
                  name="password"
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit">
                Login
              </Button>
              {error && (
                <div
                  className="alert alert-danger w-5  mt-5"
                  role="alert ">
                  <p>Invalid credentials</p>
                </div>
              )}
            </Form>
          </Container>
        </div>
      )}
    </>
  );
}

export default LoginPage;
