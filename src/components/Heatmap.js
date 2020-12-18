/* eslint-disable comma-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Timezone,
  TimezoneContainer,
  WeekDays
} from './common/heatmap/Heatmap.style';
import Hours from './Hours';
import Table from './Table';

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
  const heatmap = display.map((el) => (
    <Container key={el.data.id}>
      <Table tableData={el.data} />
    </Container>
  ));

  return (
    <>
      <Hours />
      <WeekDays>{weekdays.map((week) => week)}</WeekDays>
      {heatmap}
      <TimezoneContainer>
        All times are shown in your timezone:
        <Timezone title="your timezone">
          {' '}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </Timezone>
      </TimezoneContainer>
    </>
  );
}

Heatmap.propTypes = {
  display: PropTypes.instanceOf(Array),
};
Heatmap.defaultProps = {
  display: PropTypes.arrayOf([]),
};
export default Heatmap;
