import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
    max-width: 800px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 200px;
      object-fit: scale-down;
      border-radius: ${theme.radius.md};
    }

    a {
      color: ${theme.colors.primary[100]};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      padding: 0 4px;
    }

    #photo {
      padding: ${theme.spacings.small} 0;
      b {
        display: block;
        color: ${theme.colors.text[200]};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        padding-bottom: ${theme.spacings.xxsmall};
        text-align: center;
      }
    }

    h2 {
      color: ${theme.colors.text[100]};
      font-size: ${theme.font.sizes.large};
      padding: ${theme.spacings.small} 0;
    }
    p {
      max-width: 800px;
      margin: ${theme.spacings.xsmall} auto;
      line-height: 2.5rem;
      color: ${theme.colors.text[100]};
      font-size: ${theme.font.sizes.medium};
      text-align: center;
    }
    b {
      display: block;
      color: ${theme.colors.text[200]};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.small};
      text-align: center;
      margin: 0 auto;
    }
    pre {
      background: ${theme.colors.background[200]};
      padding: ${theme.spacings.xxsmall};
      border-radius: ${theme.radius.md};
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family};
      white-space: pre-wrap;
    }

    ul {
      margin: ${theme.spacings.small} auto;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};
      li {
        display: flex;
        align-items: center;
        gap: ${theme.spacings.xxsmall};
        color: ${theme.colors.text[100]};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.normal};
        text-align: center;
        justify-content: center;

        background: ${theme.colors.background[200]};
        padding: ${theme.spacings.xxsmall};
        border-radius: ${theme.radius.md};
      }
    }
  `}
`
