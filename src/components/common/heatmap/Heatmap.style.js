/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.article``;
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
 
  color: ${(props) => props.theme.color.light};
`;
export const WeekdaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.heatmap.dayBackground};
`;
