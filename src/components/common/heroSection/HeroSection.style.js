import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as UnstyledLogo } from '../../images/table.svg';

const Div = styled.div``;
const section = styled.article``;

export const Container = styled(Div)`
  min-height: ${(props) => props.theme.size.halfHeight};
  display: flex;
  flex-direction: column;
`;
export const Main = styled(Div)`
  min-height: ${(props) => props.theme.size.halfHeight};
  width: ${(props) => props.theme.font.size.vmin};
  margin: ${(props) => props.theme.font.size.marginCenter};
`;
export const Section = styled(section)`
  text-align: ${(props) => props.theme.font.size.center};
  margin: ${(props) => props.theme.font.size.threeRem} 0 ${(props) => props.theme.font.size.seveRem} 0;
`;
export const Header = styled.header``;
export const SearchContainer = styled(Div)`
  padding: ${(props) => props.theme.font.size.default};
  text-align: ${(props) => props.theme.font.size.center};
`;
export const CTAContainer = styled(Div)`
  text-align: ${(props) => props.theme.font.size.center};
  margin: ${(props) => props.theme.font.size.large}; ;
`;
export const Hero = styled.h1`
  min-width: ${(props) => props.theme.font.size.vwidth};
  height: ${(props) => props.theme.font.size.fourtySix};
  font-family: ${(props) => props.theme.font.family.headline};
  font-size: ${(props) => props.theme.font.size.thirty8};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.color.dark};
  margin: ${(props) => props.theme.font.size.default};
`;
export const H4 = styled.h4`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.onePointFive};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.color.dark};
  margin: ${(props) => props.theme.font.size.zeroPointFive};
`;
export const H3 = styled.h3`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.default};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${(props) => props.theme.font.size.center};
  color: ${(props) => props.theme.color['gray-base']};
`;
export const Ul = styled.ul``;
export const Li = styled.li`
  text-align: left;
  line-height: 1.5;
  font-size: 1rem;
  color: ${(props) => props.theme.color['gray-base']};
  font-family: ${(props) => props.theme.font.family.default}
`;
export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.default};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${(props) => props.theme.color['gray-base']};
  text-align: left;
  margin: ${(props) => props.theme.font.size.default} 0 ${(props) => props.theme.font.size.default} 0;
  padding:  ${(props) => props.theme.font.size.default};
`;
const Button = styled.button``;
export const Search = styled(Link)`
  width: 217px;
  height: auto;
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.family.small};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  // line-height: 0.64;
  letter-spacing: normal;
  text-align: ${(props) => props.theme.font.size.center};
  color: ${(props) => props.theme.color.light};
  background-color: #e1b36d;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  margin: ${(props) => props.theme.font.size.fivePixels};
  text-decoration: none;
`;
export const Span = styled.span`
  margin: ${(props) => props.theme.font.size.small} 0
    ${(props) => props.theme.font.size.small} 0;
  font-size: ${(props) => props.theme.font.size.small};
  text-align: ${(props) => props.theme.font.size.center};
  display: block;
  color: ${(props) => props.theme.color.light};
`;
export const CTA = styled(Button)`
  width: 107px;
  height: 29px;
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.default};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.color['gray-base']};
  border: 0;
  cursor: pointer;
  text-align: ${(props) => props.theme.font.size.center};
`;
export const Table = styled(UnstyledLogo)`
  width: 831px;
  height: 320px;
  max-width: ${(props) => props.theme.size.fullPage};
  object-fit: contain;
  margin: 0 10px 0 10px;
  justify-content: ${(props) => props.theme.font.size.center};
  align-content: ${(props) => props.theme.font.size.center};
  margin: ${(props) => props.theme.font.size.marginCenter};
`;
