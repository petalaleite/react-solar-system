import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PropType from 'prop-types';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MissionCard extends React.Component {
	render() {
		const { name, year, country, destination } = this.props;
		return (
			<Row xs={1} md={4} className='g-4'>
				{Array.from({ length: 4 }).map((_, idx) => (
					<Col>
						<Card
							border='light pill-round'
							className='bg-transparent text-light'>
							<Card.Body>
								<Card.Title className='list-group-item'>{name}</Card.Title>
								<p className='list-group-item'>{year}</p>
								<p className='list-group-item'>{country}</p>
								<p className='list-group-item'>{destination}</p>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
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
