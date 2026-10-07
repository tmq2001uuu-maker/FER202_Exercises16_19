import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  name, scientificName, size, diet, additional, showAdditional,
}) {
  return (
    <article className="animal-card">
      <h2>{name}</h2>
      <p><strong>Scientific name:</strong> <em>{scientificName}</em></p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Diet:</strong></p>
      <ul>{diet.map(item => <li key={item}>{item}</li>)}</ul>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </article>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};
