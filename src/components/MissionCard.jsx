import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PropType from 'prop-types';
import { Card } from 'react-bootstrap';

class MissionCard extends React.Component {
	render() {
		const { name, year, country, destination } = this.props;
		return (
			<section className='w-25 m-3 border border-white rounded bg-transparent text-light'>
				<Card.Body>
					<Card.Title className='p-1 border-bottom'>{name}</Card.Title>
					<p className=''>{year}</p>
					<p className=''>{country}</p>
					<p className=''>{destination}</p>
				</Card.Body>
			</section>
		);
	}
}

MissionCard.propTypes = {
	name: PropType.String,
	year: PropType.String,
	country: PropType.String,
	destination: PropType.String,
}.isRequired;

export default MissionCard;
