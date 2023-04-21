import styled, { css } from 'styled-components'

import { MdClose } from 'react-icons/md'

type MenuItem = {
  active?: boolean
}

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    height: 40px;

    background: hsla(0, 0%, 100%, 0.726);
    border: 1px solid ${theme.colors.background[300]};
    border-radius: 20px;

    padding: 0 ${theme.spacings.xsmall};
  `}
`

export const MenuLink = styled.a<MenuItem>`
  ${({ theme, active }) => css`
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;

    appearance: none;

    height: 100%;
    text-decoration: none;

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.small};

    transition: ${theme.transitions.bounce};

    color: ${active ? theme.colors.primary[100] : theme.colors.text[300]};
    &:hover {
      color: ${theme.colors.primary[100]};
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;
    appearance: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};

    cursor: pointer;
    border: none;
    background: none;

    transition: ${theme.transitions.bounce};

    color: ${theme.colors.text[100]};
    &:hover {
      color: ${theme.colors.primary[100]};
    }
  `}
`

export const OverlayClick = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(138, 138, 138, 0.233);
    z-index: 900;
    backdrop-filter: blur(5px);

    display: flex;
    align-items: flex-start;
    padding: ${theme.spacings.xlarge} 0;
    justify-content: center;
  `}
`

export const MenuFullWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;

    display: flex;
    background: ${theme.colors.background[100]};

    flex-direction: column;
    gap: ${theme.spacings.small};
    width: 90%;

    padding: ${theme.spacings.medium} ${theme.spacings.small};

    border-radius: ${theme.radius.md};
  `}
`

export const MenuFullHead = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const CloseMenu = styled(MdClose)`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.large};

    transition: ${theme.transitions.bounce};

    &:hover {
      color: ${theme.colors.primary[100]};
    }
  `}
`
