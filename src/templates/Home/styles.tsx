import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 48px 0;
  padding-top: 94px;
`
export const Projects = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 80px;
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
