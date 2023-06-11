import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { fakeCredentials } from '../fakeid';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void; // Add onLogin prop
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check credentials against fake credentials
    if (username === fakeCredentials.username && password === fakeCredentials.password) {
      // Successful login
      console.log('Login successful');
      onClose();
      onLogin(username, password); // Invoke onLogin prop with username and password
    } else {
      // Invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <div className="text-danger">{error}</div>}

          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
