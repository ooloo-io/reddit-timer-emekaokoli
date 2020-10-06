import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as UnstyledLogo } from '../../images/elements-sign.svg';

export const Container = styled.footer`
  width: 100%;
  max-width: 980px;
  height: ${(props) => props.theme.size.footerHeight};
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;
const ParentDiv = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.semidark};
  font-size: ${(props) => props.theme.font.size.default};
  flex: 1;
`;
export const TermsPrivacy = styled(ParentDiv)`
  text-align: right;
  font-size: ${(props) => props.theme.font.size.small};
`;

export const Ooloo = styled(ParentDiv)`
  text-align: left;
  font-size: ${(props) => props.theme.font.size.small};
`;
export const Logo = styled(UnstyledLogo)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  vertical-align: bottom;
  display:block;
`;
