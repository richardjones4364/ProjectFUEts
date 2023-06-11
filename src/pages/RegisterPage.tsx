import 'bootstrap/dist/css/bootstrap.css';
import Register from '../components/Register';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';

function RegisterPage() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h1 className="mb-0">Trombone Club</h1>
          <p className="text-muted" style={{ margin: '0' }}>{currentDate}</p>
        </div>
        <Register />
      </Container>
    </>
  );
}

export default RegisterPage;

