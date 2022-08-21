import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
	render() {
		return (
			<div>
				<Title headline='Planetas' />
				{planets.map((planet) => (
					<PlanetCard
						planetName={planet.name}
						planetImage={planet.image}
						key={planet.name}
					/>
				))}
			</div>
		);
	}
}

export default SolarSystem;
