import React from 'react';
import {
  Container, Logo, Ooloo, TermsPrivacy
} from './common/footer/Footer.style';

export default function Footer() {
  return (
    <Container>
      <Ooloo as="a" href="https://ooloo.io/employers" target="_blank">
        ooloo.io
      </Ooloo>
      <Logo to="/" alt={Logo} />
      <TermsPrivacy to="/terms">
        Terms & Privacy
      </TermsPrivacy>
    </Container>
  );
}
