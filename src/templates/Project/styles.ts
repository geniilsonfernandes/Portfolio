import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.text[100]};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
