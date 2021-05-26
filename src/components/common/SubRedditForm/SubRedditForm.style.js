import styled from 'styled-components';
import { Container, Main } from '../infosection/infoSection.style';

// eslint-disable-next-line import/prefer-default-export
export const AppContainer = styled(Container)`
  margin: ${(props) => props.theme.font.size.marginCenter};
  text-align:center;
`;
export const AppMain = styled(Main)`
 // width:${(props) => props.theme.color.heatmap.size.halfHeight};
`;
export const Input = styled.input`
  width: 370px;
  height: 36px;
  border-radius: 2px;
  border: solid 1px ${(props) => props.theme.color.semiLight};
  background-color: ${(props) => props.theme.color.light};
  height: 36px;
`;
export const Button = styled.button`
  width: 92px;
  height: 36px;
  border-radius: 4px;
  border: 0;
  margin: ${(props) => props.theme.font.size.fivePixels};
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.font.size.medium};
`;
export const H1 = styled.h1`
  margin: ${(props) => props.theme.font.size.marginCenter};
  padding-bottom: 30px;
  width: 611px;
  height: 46px;
  font-family: ${(props) => props.theme.font.family.headlinetext};
  font-size: ${(props) => props.theme.font.size.headline};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${(props) => props.theme.font.size.center};
  color: ${(props) => props.theme.color.dark};
`;
export const ErrorMessage = styled.article`
margin-top: 50px;
  text-align: ${(props) => props.theme.font.size.center};
  font-size: ${(props) => props.theme.font.size.headlinetext};
  color: ${(props) => props.theme.color.dark};
`;
