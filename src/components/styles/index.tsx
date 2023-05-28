import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text[100]};
    padding-top: ${theme.spacings.small};

    @media (max-width: ${theme.viewPorts.tablet}) {
      font-size: ${theme.font.sizes.huge};
    }
  `}
`

type TextProps = {
  highlight?: boolean
}

export const Subtitle = styled.h2<TextProps>`
  ${({ theme, highlight }) => css`
    padding-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.small};
    color: ${highlight ? theme.colors.primary[100] : theme.colors.text[200]};
    line-height: 2.4rem;

    @media (max-width: ${theme.viewPorts.tablet}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

type FlexProps = {
  direction?: 'row' | 'column'
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end'
  align?: 'center' | 'flex-start' | 'flex-end'
  gap?: string
  padding?: string
}

export const Flex = styled.div<FlexProps>`
  ${({
    direction = 'row',
    justify = 'flex-start',
    align = 'center',
    gap = '0',
    padding = '0',
  }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    padding: ${padding};
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: ${theme.colors.background[700]};
    color: ${theme.colors.text[100]};
    width: 100%;
    height: 3.2rem;
    border-radius: 0.8rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    font-family: ${theme.font.family};
    text-decoration: none;
    transition: ${theme.transitions.bounce};

    &:hover {
      background: ${theme.colors.background[600]};
    }
    border: none;
    outline: none;
    cursor: pointer;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background[800]};
    border: 1px solid ${theme.colors.background[700]};

    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xsmall};
  `}
`
