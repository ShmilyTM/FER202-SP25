import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function AnimalCard({ name, scientificName, size, diet, additional, image, showAdditional }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <em>{scientificName}</em>
        </Card.Subtitle>
        <Card.Text>
          <strong>Size:</strong> {size} kg <br />
          <strong>Diet:</strong> {diet.join(', ')}
        </Card.Text>
        {additional && (
          <Button variant="info" onClick={() => showAdditional(additional)}>
            More Info
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
    link: PropTypes.string,
  }),
  showAdditional: PropTypes.func.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};

export default AnimalCard;
