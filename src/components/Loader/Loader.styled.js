import styled from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

export const Spinner = styled(ImSpinner2)`
  margin-right: ${p => p.theme.space[4]}px;
  animation: icon-spin 2s infinite linear;

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
