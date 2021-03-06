import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { ReactComponent as logounstyled } from '../../images/elements-logo.svg';

// height: 100px;
export const Container = styled.header`
  width: 100%;
  height: ${(props) => props.theme.size.headerHeight || '100px'};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavTag = styled.nav`
  margin: 0.2rem;
`;

export const UlTag = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const LiTag = styled.li`
  margin: 0.6rem;
  padding: 0.5rem;
  display: inline-block;
  align-content: flex-start;
`;
//
export const Logo = styled(logounstyled)`
  width: 150px;
  height: 36px;
  object-fit: contain;
  margin: 0.8rem;
  cursor: pointer;
  display: block;
`;
// color: #0087ff;
export const Links = styled(NavHashLink)`
  text-decoration: none;
  transition: all 0.3s ease 0s;
  color: ${(props) => props.theme.color.link}
  &:hover {
    transition: all 0.3s ease 0s;
    color: ${(props) => props.theme.color.primary};
  }
`;
export const Navlink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color.link}
  &:hover {
    transition: all 0.3s ease 0s;
    color: ${(props) => props.theme.color.primary};
  }
`;
