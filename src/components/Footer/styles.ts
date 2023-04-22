import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
  `}
`
