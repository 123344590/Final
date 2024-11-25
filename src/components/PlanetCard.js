import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PlanetCard.module.css';

const PlanetCard = ({ id, name, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link
        to={`/planets/${id}`}
        state={{ id, name, description, image }} // Pasar datos al componente de detalles
        className={styles.link}
      >
        Ver detalles
      </Link>
    </div>
  );
};

export default PlanetCard;
