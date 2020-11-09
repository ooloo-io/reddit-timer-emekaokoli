import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './common/heatmap/Heatmap.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function Heatmap({ display }) {
  return (
    display.map((el) => (
      <Container key={el.data.id}>
        {console.log(el.data)}
      </Container>
    ))
  );
}

export default Heatmap;

Heatmap.propTypes = {
  display: PropTypes.instanceOf(Array),
};
Heatmap.defaultProps = {
  display: PropTypes.arrayOf([]),
};
