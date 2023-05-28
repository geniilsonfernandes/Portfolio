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

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text[100]};

    text-transform: capitalize;

    margin-bottom: ${theme.spacings.medium};
  `}
`
