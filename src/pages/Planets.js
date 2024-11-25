import React from 'react';
import PlanetCard from '../components/PlanetCard';

// Datos estáticos de los planetas, incluyendo imágenes
const planetsData = [
  {
    id: '1',
    name: 'Mercurio',
    description: 'El planeta más pequeño del sistema solar.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
  },
  {
    id: '2',
    name: 'Venus',
    description: 'Segundo planeta desde el Sol, conocido por su alta temperatura.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
  },
  {
    id: '3',
    name: 'Tierra',
    description: 'Nuestro planeta, hogar de una rica biodiversidad.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
  },
  {
    id: '4',
    name: 'Marte',
    description: 'Conocido como el planeta rojo.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
  },
  {
    id: '5',
    name: 'Júpiter',
    description: 'El planeta más grande del sistema solar.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
  },
  {
    id: '6',
    name: 'Saturno',
    description: 'Famoso por su impresionante sistema de anillos.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
  },
  {
    id: '7',
    name: 'Urano',
    description: 'Un gigante de hielo con un color azul verdoso.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
  },
  {
    id: '8',
    name: 'Neptuno',
    description: 'El planeta más alejado del Sol.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg',
  },
];

const Planets = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>Planetas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {planetsData.map((planet) => (
          <PlanetCard
            key={planet.id}
            id={planet.id}
            name={planet.name}
            description={planet.description}
            image={planet.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Planets;
