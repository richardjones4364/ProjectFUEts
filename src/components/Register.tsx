import { Container, Table, Form } from 'react-bootstrap';

function Register() {
  return (
    <Container className="md-8">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Present</th>
            <th>Last</th>
            <th>First</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>9TH</td>
          </tr>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8GH</td>
          </tr>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>Larry</td>
            <td>Piles</td>
            <td>7GG</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Register;