import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 

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
      <Table striped bordered hover size="sm" className="table-sm">
        <colgroup>
          <col style={{ width: 'auto' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
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
              className={`check-cell ${presentStatus[0] ? 'selected' : ''}`}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={`check-icon ${presentStatus[0] ? 'text-success' : ''}`}
              />
            </td>
            <td
              onClick={() => toggleStatus(0)}
              className={`cross-cell ${!presentStatus[0] ? 'selected' : ''}`}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className={`cross-icon ${!presentStatus[0] ? 'text-danger' : ''}`}
              />
            </td>
            <td>Jones</td>
            <td>Daffydd</td>
            <td>9TH</td>
          </tr>
          <tr>
            <td
              onClick={() => toggleStatus(1)}
              className={`check-cell ${presentStatus[1] ? 'selected' : ''}`}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={`check-icon ${presentStatus[1] ? 'text-success' : ''}`}
              />
            </td>
            <td
              onClick={() => toggleStatus(1)}
              className={`cross-cell ${!presentStatus[1] ? 'selected' : ''}`}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className={`cross-icon ${!presentStatus[1] ? 'text-danger' : ''}`}
              />
            </td>
            <td>Smith</td>
            <td>Jeffy</td>
            <td>8GH</td>
          </tr>
          <tr>
            <td
              onClick={() => toggleStatus(2)}
              className={`check-cell ${presentStatus[2] ? 'selected' : ''}`}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={`check-icon ${presentStatus[2] ? 'text-success' : ''}`}
              />
            </td>
            <td
              onClick={() => toggleStatus(2)}
              className={`cross-cell ${!presentStatus[2] ? 'selected' : ''}`}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className={`cross-icon ${!presentStatus[2] ? 'text-danger' : ''}`}
              />
            </td>
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
