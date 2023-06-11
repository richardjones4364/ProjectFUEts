import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import LoginModal from '../components/LoginModal';
import WelcomePage from '../pages/Welcome';

const LoginPage: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Check if the username and password match the desired credentials
    if (username === 'foo' && password === 'bar') {
      // Set the loggedIn state to true
      setLoggedIn(true);
    } else {
      // Handle incorrect credentials
      alert('Incorrect username or password');

    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loggedIn) {
    return <WelcomePage />;
  }

  return (
    <div>
      <NavBar />
      <LoginModal show={showModal} onClose={handleCloseModal} onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
