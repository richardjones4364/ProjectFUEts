import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Club {
  id: number;
  name: string;
}

function ClubsToday() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [currentDate, setCurrentDate] = useState<string>(new Date().toLocaleDateString());

  useEffect(() => {
    // Simulate API call to retrieve user's clubs for today
    fetchClubsForToday()
      .then((data: Club[]) => {
        setClubs(data);
      })
      .catch((error: Error) => {
        console.error('Error retrieving clubs:', error);
      });

    // Update current date when component mounts
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  // Simulated API call to retrieve clubs for today
  function fetchClubsForToday(): Promise<Club[]> {
    // Replace this with your actual API call to Orchard Core API
    return new Promise(resolve => {
      // Simulating a delay
      setTimeout(() => {
        const clubsData: Club[] = [
          { id: 1, name: 'Trombone Club' },
          { id: 2, name: 'Motorbike Club' },
          { id: 3, name: 'Game Jam' },
        ];
        resolve(clubsData);
      }, 1000);
    });
  }

  return (
    <Container>
      {clubs.length > 0 ? (
        <>
          <ListGroup>
            <ListGroup.Item>
              <b>Your Clubs</b> - {currentDate}
            </ListGroup.Item>
            {clubs.map(club => (
              <Link key={club.id} to={`/club/${club.id}`} style={{ color: 'inherit' }}>
                <ListGroup.Item action>
                  {club.name}
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </>
      ) : (
        <p>You have no clubs today.</p>
      )}
    </Container>
  );
}

export default ClubsToday;
