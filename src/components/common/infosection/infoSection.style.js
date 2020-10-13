import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const Div = styled.div``;
const section = styled.section``;
export const Main = styled(Div)`
   //min-height: 100vmin;
   width: 110vmin;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   margin: 0 auto;
 `;

export const Container = styled(Div)`
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Section = styled(section)`
  text-align: center;
  margin: 3rem 0 7rem 0;
`;

export const Links = styled(Link)`
  color: ${(props) => props.theme.color.link};
  text-decoration: none;
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
