import './PlanetCard.css';
import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
	render() {
		const { planetName, planetImage } = this.props;
		return (
			<section className='text-light'>
				<div>
					<p>{planetName}</p>
					<img src={planetImage} alt={`Planeta ${planetName}`} />
				</div>
			</section>
		);
	}
}

PlanetCard.propTypes = {
	planetName: PropType.String,
	planetImage: PropType.String,
}.isRequired;

export default PlanetCard;
