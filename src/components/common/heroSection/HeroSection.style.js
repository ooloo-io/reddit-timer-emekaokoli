import styled from 'styled-components';
import { ReactComponent as UnstyledLogo } from '../../images/table.svg';

const Div = styled.div``;
const section = styled.section``;

export const Container = styled(Div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Main = styled(Div)`
  min-height: 100vh;
  width: 110vmin;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
export const Section = styled(section)`
  text-align: center;
  margin: 3rem 0 7rem 0;
`;
export const Header = styled.header``;
export const SearchContainer = styled(Div)`
  margin: 2rem;
  padding: 1rem;
  text-align: center;
`;
export const CTAContainer = styled(Div)`
  text-align: center;
  margin: 2rem;
`;
export const Hero = styled.h1`
  min-width: 616px;
  height: 46px;
  font-family: ${(props) => props.theme.font.family.headline};
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin: 1rem;
`;
export const H4 = styled.h4`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.color.dark};
  margin: 0.5rem;
`;
export const H3 = styled.h3`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
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
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${(props) => props.theme.color['gray-base']};
  text-align: left;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
`;
const Button = styled.button``;
export const Search = styled(Button)`
  width: 217px;
  height: 36px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: #e1b36d;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
`;
export const CTA = styled(Button)`
  width: 107px;
  height: 29px;
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.color['gray-base']};
  border: 0;
  cursor: pointer;
  text-align: center;
  margin: 2rem;
`;
export const Table = styled(UnstyledLogo)`
  width: 831px;
  height: 320px;
  object-fit: contain;
  margin: 0 10px 0 10px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;