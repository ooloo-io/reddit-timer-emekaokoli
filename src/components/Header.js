import React from 'react';
import {
  Container,
  Links,
  LiTag,
  Logo,
  Navlink,
  NavTag,
  // eslint-disable-next-line comma-dangle
  UlTag
} from './common/header/Header.style';

export default function Nav() {
  return (
    <>
      <Container>
        <Navlink to="/">
          <Logo alt={Logo} />
        </Navlink>
        <NavTag>
          <UlTag>
            <LiTag data-testid="search">
              <Navlink to="/subredditform/javascript">Search</Navlink>
            </LiTag>
            <LiTag data-testid="howitworks">
              <Links smooth to="/#how-it-works">
                How it works
              </Links>
            </LiTag>
            <LiTag data-testid="about">
              <Links smooth to="/#about">
                About
              </Links>
            </LiTag>
          </UlTag>
        </NavTag>
      </Container>
    </>
  );
}
