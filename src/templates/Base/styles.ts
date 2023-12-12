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
    background: ${theme.colors.background[900]};
    padding: 0 ${theme.spacings.xsmall};

    position: relative;
  `}
`
