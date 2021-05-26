/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

// const getBackgroundColor = ({ numPosts, theme, bgColorScheme }) => {
//   const backgroundColors = theme.color.heatmap[bgColorScheme];

//   if (numPosts >= backgroundColors.length) {
//     return backgroundColors[backgroundColors.length - 1];
//   }

//   return backgroundColors[numPosts];
// };

export const Container = styled.div`
  //display: flex;
  background-color: red;
  width: ${(props) => props.theme.color.heatmap.size.heatmap.width}px;
  height: 60vh;
  margin: auto;
`;
export const DisplayContainer = styled.div``;
export const TimezoneContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: ${(props) => props.theme.font.size.small};
  text-align: center;
`;

export const Timezone = styled.span`
  font-weight: 600;
`;
export const WeekDays = styled.div`
  // width: ${(props) => props.theme.color.heatmap.size.heatmap.dayWidth}px;
  // height: ${(props) => props.theme.color.heatmap.size.heatmap.hour}px;
  line-height: ${(props) => props.theme.color.heatmap.size.heatmap.hour}px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.color.light};
`;
export const WeekdaysContainer = styled.div`
  background-color: ${(props) => props.theme.color.heatmap.dayBackground};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
`;

const highlighted = css`
  border: solid 1px ${(props) => props.theme.color.heatmap.hourHoverBorder};
  line-height: ${(props) => props.theme.color.heatmap.size.heatmap.hour - 2}px;
`;
// export const HourOfTheDayButton = styled.button`
//   width: ${(props) => props.theme.size.heatmap.hour}px;
//   height: ${(props) => props.theme.size.heatmap.hour}px;
//   line-height: ${(props) => props.theme.size.heatmap.hour}px;
//   text-align: center;
//   font-size: ${(props) => props.theme.font.size.small};
//   font-weight: 600;
//   color: ${(props) => props.theme.color.light};
//   background-color: ${(props) => getBackgroundColor(props)};
//   cursor: pointer;
//   border: none;
//   border-radius: 0;

//   ${(props) => props.selected && highlighted}

//   :hover, :focus {
//     outline: none;
//     ${highlighted}
//   }
// `;
export const HourOfTheDayButton = styled.button`
  width: ${(props) => props.theme.color.heatmap.size.heatmap.hour}px;
  height: ${(props) => props.theme.color.heatmap.size.heatmap.hour}px;
  line-height: ${(props) => props.theme.color.heatmap.size.heatmap.hour}px;
  text-align: center;
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 600;
  color: ${(props) => props.theme.color.light};
  cursor: pointer;
  border: none;
  border-radius: 0;

  ${(props) => props.selected && highlighted}

  :hover, :focus {
    outline: none;
    ${highlighted}
  }
`;
export const HeatMapContainer = styled.div`
  height: auto;
  width: auto;
  bacground-color: green;
`;
