import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2 className='text-center'>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropType.string.isRequired,
};

export default Title;
