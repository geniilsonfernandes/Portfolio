import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.viewPorts.desktop};
    margin: 0 auto;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background[100]};
    padding: ${theme.spacings.xsmall};
  `}
`
