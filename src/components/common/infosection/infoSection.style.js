import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const Div = styled.div``;
const section = styled.article``;
export const Main = styled(Div)`
  min-height: ${(props) => props.theme.size.halfHeight};
  width: ${(props) => props.theme.font.size.vmin};
  align-content: ${(props) => props.theme.font.size.center};
  margin: ${(props) => props.theme.font.size.marginCenter};
`;

export const Container = styled(Div)`
  // min-height: 100vh;a
  display: flex;
  flex-direction: column;
`;

export const Section = styled(section)`
  width: 37vw;
  text-align: center;
  margin: ${(props) => props.theme.font.size.marginCenter}
    ${(props) => props.theme.font.size.marginCenter};
  padding: ${(props) => props.theme.font.size.large};
`;
export const WrapSection = styled(section)`
  height: ${(props) => props.theme.size.halfHeight};
 
`;
export const Links = styled(Link)`
  color: ${(props) => props.theme.color.link};
  text-decoration: none;
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

export const Ul = styled.ul``;
export const Li = styled.li`
  text-align: left;
  line-height: 1.5;
  font-size: 1rem;
  color: ${(props) => props.theme.color['gray-base']};
  font-family: ${(props) => props.theme.font.family.default};
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
  margin: ${(props) => props.theme.font.size.default} 0 
  ${(props) => props.theme.font.size.default} 0;
  padding: ${(props) => props.theme.font.size.default};
`;
