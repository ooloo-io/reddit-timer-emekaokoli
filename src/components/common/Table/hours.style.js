/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.6rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  height: ${(props) => props.theme.color.heatmap.headerHeight};
`;
export const Hour = styled.div`
  width: ${(props) => props.theme.size.heatmap.hour * 2}px;
  text-align: center;
  color: ${(props) => props.theme.color.heatmap.headerHour};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;
  background-image: ${(props) => props.theme.color.heatmap.headerBackground};
  height: ${(props) => props.theme.color.heatmap.headerHeight};
`;
