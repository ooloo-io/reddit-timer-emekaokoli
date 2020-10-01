import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, Ooloo, TermsPrivacy
} from './common/footer/Footer.style';

export default function Footer() {
  return (
    <Container>
      <Ooloo as="a" href="https://ooloo.io/employers">
        ooloo.io
      </Ooloo>
      <Link to="/">
        <Logo alt={Logo} />
      </Link>
      <TermsPrivacy to="/terms">
        Terms & Privacy
      </TermsPrivacy>
    </Container>
  );
}
