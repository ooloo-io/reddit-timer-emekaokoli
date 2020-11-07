import styled, { keyframes } from 'styled-components';
import { ReactComponent as UnstyledLogo } from '../images/loading-spinner.svg';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.article`
  margin-top: ${(props) => props.theme.font.size.threeRem};
  text-align: ${(props) => props.theme.font.size.center};
`;

const spinLogo = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

export const LoadingSpin = styled(UnstyledLogo)`
  width: 71px;
  height: 71px;
  object-fit: contain;
  animation: ${spinLogo} 1.5s Linear infinite;
  transform-origin: 50% 50%;
  animation-timing-function: cubic-bezier(0.42, 0, 0.46, 0.99);
`;
