import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 48px 0;
  padding-top: 94px;
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
