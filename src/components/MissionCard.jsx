import React from 'react';
import PropType from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
			<div data-testid='mission-card' className='card-body'>
				<p data-testid='mission-name' className='list-group-item'>
					{name}
				</p>
				<p data-testid='mission-year' className='list-group-item'>
					{year}
				</p>
				<p data-testid='mission-country' className='list-group-item'>
					{country}
				</p>
				<p data-testid='mission-destination' className='list-group-item'>
					{destination}
				</p>
			</div>
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
