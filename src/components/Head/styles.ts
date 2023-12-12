import styled, { css } from 'styled-components'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai'

export const Wrapper = styled.div`
  max-width: 650px;
`

export const Photo = styled.img`
  ${({ theme }) => css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    box-shadow: ${theme.boxShadow};

    @media (max-width: ${theme.viewPorts.tablet}) {
      width: 48px;
      height: 48px;
    }
  `}
`

export const IconWrapper = styled.a`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.colors.text[300]};

    transition: ${theme.transitions.bounce};
    &:hover {
      color: ${theme.colors.primary[100]};
    }
  `}
`

export const GitHubIcon = styled(AiFillGithub)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: inherit;
  `}
`

export const LinkedInIcon = styled(AiFillLinkedin)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: inherit;
  `}
`

export const InstagramIcon = styled(AiFillInstagram)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: inherit;
  `}
`

export const TwitterIcon = styled(AiFillTwitterSquare)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: inherit;
  `}
`

export const Social = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};

    display: inline-flex;
    align-items: center;

    gap: ${theme.spacings.small};
  `}
`
