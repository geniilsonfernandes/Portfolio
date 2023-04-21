import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.viewPorts.desktop};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
    position: relative;
    z-index: 1;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background[100]};
    padding: 0 ${theme.spacings.xsmall};

    position: relative;
    &:before {
      content: '';
      position: absolute;
      display: block;
      right: 0;
      width: 500px;
      height: 500px;
      filter: blur(250px);
      background: ${theme.colors.primary.gradient[100]};
      opacity: 0.6;
    }
  `}
`
