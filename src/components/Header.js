import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import GetLogo from './images/elements-logo.svg';

export default function Nav() {
  return (
    <>
      <HeadTag>
        <Links to="/">
          <Logo src={GetLogo} alt={GetLogo} />
        </Links>
        <NavTag>
          <UlTag>
            <LiTag>
              <Input placeholder="Search" />
            </LiTag>
            <LiTag>
              <Links to="/how-it-works" activeClassName="selected">
                How It Works
              </Links>
            </LiTag>
            <LiTag>
              <Links to="/about">About</Links>
            </LiTag>
          </UlTag>
        </NavTag>
      </HeadTag>
    </>
  );
}
const NavTag = styled.nav`
  margin: 0.2rem;
`;
const HeadTag = styled.header`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UlTag = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const LiTag = styled.li`
  margin: 0.6rem;
  padding: 0.5rem;
  display: inline-block;
  align-content: flex-start;
`;
const Logo = styled.img`
  width: 150px;
  height: 36px;
  object-fit: contain;
  margin: 0.8rem;
  cursor: pointer;
`;
const Links = styled(NavLink)`
  text-decoration: none;
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  &:hover {
    transition: all 0.3s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    color: green;
  }
`;
const Input = styled.input`
type='text';
border:0;
`;
