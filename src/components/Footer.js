import React from 'react';
import styled from 'styled-components';
import GetLogo from './images/elements-sign.svg';

export default function Footer() {
  return (
    <Wrapper>
      <ParentDiv>
        <Ooloo>oloo.io</Ooloo>
        <Sign src={GetLogo} alt={GetLogo} />
        <TermsPrivacy>Terms & Privacy</TermsPrivacy>
      </ParentDiv>
    </Wrapper>
  );
}
const Ooloo = styled.div`
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
const ParentDiv = styled.div`
  display: flex;
  // margin: 0 10rem 0 10rem;
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
const theme = {
  brownishgrey: (x) => `color: ${x}`,
};
