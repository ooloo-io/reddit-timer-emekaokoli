/* eslint-disable comma-dangle */
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import {
  Container,
  DisplayContainer,
  HeatMapContainer,
  HourOfTheDayButton,
  Timezone,
  TimezoneContainer,
  WeekDays,
  WeekdaysContainer
} from './common/heatmap/Heatmap.style';
import Hours from './Hours';
import TableComponent from './Table';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
function sortDisplay(postResult) {
  // console.log(postResult.map((e, i) => console.log(e[i][i]))
  // posts passed by ref so avoid mutation with aray destructuring
  return [...postResult].sort(
    (a, b) => a.createdAt.getMinutes() - b.createdAt.getMinutes().toLowerCase(),
  );
}
function Heatmap({ postResult, postsPerDay }) {
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({
    day: null,
    hour: null,
  });

  const { day, hour } = selectedDayAndHour;
  const selectedPosts = (postsPerDay[day] && postsPerDay[day][hour]) || [];

  const updateSelectedDayAndHour = useCallback((newSelectedDayAndHour) => {
    setSelectedDayAndHour(newSelectedDayAndHour);
  }, []);

  const HeatMapData = sortDisplay(postResult).map((post, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <DisplayContainer key={index}>
      {selectedPosts.length > 0 && (
        <TableComponent postTable={post} selectedPosts={selectedPosts} />
      )}
    </DisplayContainer>
  ));

  return (
    <HeatMapContainer>
      {/* <Hours updateSelectedDayAndHour={updateSelectedDayAndHour} /> */}
      <Hours updateSelectedDayAndHour={updateSelectedDayAndHour} />
      <WeekdaysContainer as="section">
        <WeekDays as="article">{weekdays}</WeekDays>
      </WeekdaysContainer>
      <Container>
        <HourOfTheDayButton>{HeatMapData}</HourOfTheDayButton>
      </Container>
      <TimezoneContainer>
        All times are shown in your timezone:
        <Timezone title="your timezone">
          {' '}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </Timezone>
      </TimezoneContainer>
    </HeatMapContainer>
  );
}

Heatmap.propTypes = {
  postResult: PropTypes.objectOf(Object),
};
Heatmap.defaultProps = {
  postResult: PropTypes.objectOf({}),
};
export default Heatmap;
