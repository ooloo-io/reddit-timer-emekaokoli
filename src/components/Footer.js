import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import GetLogo from './images/elements-sign.svg';

export default function Footer() {
  return (
    <Wrapper>
      <ParentDiv>
        <Link
          to={{
            pathname: 'https://ooloo.io/employers',
          }}
          target="_blank"
        >
          ooloo.io
        </Link>
        <Links to="/">
          <Sign src={GetLogo} alt={GetLogo} />
        </Links>
        <Links to="/terms">
          <TermsPrivacy>Terms & Privacy</TermsPrivacy>
        </Links>
      </ParentDiv>
    </Wrapper>
  );
}
const Link = styled(NavLink)`
  text-decoration: none;
  :root {
    --brownish-grey: #636363;
  }
  width: 55px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--brownish-grey);
`;
const Links = styled(NavLink)`
  text-decoration: none;
`;
const ParentDiv = styled.div`
  display: flex;
  height: auto;
  padding: 0 10rem 0 10rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  bottom: 0;
  left: 0;
`;
const TermsPrivacy = styled.div`
  :root {
    
  }
  width: 112px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--brownish-grey);
`;
const Wrapper = styled.footer`
  bottom: 0;
  left:0;
  color:#636363;
  // width: 1440px;
  width: 100%;
  //height: 100px;
  font-family: 'Montserrat';
`;
const Sign = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  margin: 0.8rem;
  cursor: pointer;
`;
// const theme = {
//   brownishgrey: (x) => `color: ${x}`,
// };
