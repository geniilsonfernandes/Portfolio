import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 96px 0;
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.spacings.small};

    @media (max-width: ${theme.viewPorts.tablet}) {
      grid-template-columns: 1fr;
    }
  `}
`
