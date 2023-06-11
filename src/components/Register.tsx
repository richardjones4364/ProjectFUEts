import { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function Register() {
  const [presentStatus, setPresentStatus] = useState([]);

  const toggleStatus = (index) => {
    setPresentStatus((prevState) => {
      const updatedStatus = [...prevState];
      updatedStatus[index] = !updatedStatus[index];
      return updatedStatus;
    });
  };

  return (
    <Container className="md-6">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>Present</th>
            <th>Last</th>
            <th>First</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              onClick={() => toggleStatus(0)}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon
                icon={presentStatus[0] ? faCheck : faTimes}
                className={presentStatus[0] ? 'text-success' : 'text-danger'}
              />
            </td>
            <td><FontAwesomeIcon
                icon={presentStatus[0] ? faTimes : faCheck}
                className={presentStatus[0] ? 'text-danger' : 'text-success'}
              /></td>
            <td>Jones</td>
            <td>Daffydd</td>
            <td>9TH</td>
          </tr>
          <tr>
          <td
              onClick={() => toggleStatus(0)}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon
                icon={presentStatus[0] ? faCheck : faTimes}
                className={presentStatus[0] ? 'text-success' : 'text-danger'}
              />
            </td>
            <td><FontAwesomeIcon
                icon={presentStatus[0] ? faTimes : faCheck}
                className={presentStatus[0] ? 'text-danger' : 'text-success'}
              /></td>
            <td>Smith</td>
            <td>Jeffy</td>
            <td>8GH</td>
          </tr>
          <tr>
          <td
              onClick={() => toggleStatus(0)}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon
                icon={presentStatus[0] ? faCheck : faTimes}
                className={presentStatus[0] ? 'text-success' : 'text-danger'}
              />
            </td>
            <td><FontAwesomeIcon
                icon={presentStatus[0] ? faTimes : faCheck}
                className={presentStatus[0] ? 'text-danger' : 'text-success'}
              /></td>
            <td>Piles</td>
            <td>Harry</td>
            <td>7GG</td>
          </tr>
        </tbody>
      </Table>
      <Button>Save</Button>
    </Container>
  );
}

export default Register;
