import styled, { css } from 'styled-components'

import { AiOutlineLink } from 'react-icons/ai'
import { MdWorkspacePremium } from 'react-icons/md'

export type WrapperProps = {
  size?: 'small' | 'large'
}

export const Wrapper = styled.div``

export const PhotoWrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    background: ${theme.colors.background[200]};
    border-radius: ${theme.radius.md};
    width: 100%;
    height: ${size === 'small' ? '172px' : '270px'};
    position: relative;
  `}
`

export const PremiumStamp = styled(MdWorkspacePremium)`
  position: absolute;
  font-size: 24px;
  color: #ffffff;
  top: 16px;
  left: 15px;
`

export const StampWrapper = styled.div`
  position: absolute;

  top: -10px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProjectPhoto = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.radius.md};
  `}
`

export const ProjectInfo = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    padding: ${theme.spacings.xsmall} 8px;

    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: ${size === 'small' ? 'column' : 'row'};

    cursor: pointer;
    background: transparent;
    transition: ${theme.transitions.ease_in_out};

    &:hover {
      background: ${theme.colors.background[200]};
      border-radius: ${theme.radius.md};
    }

    @media (max-width: ${theme.viewPorts.tablet}) {
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};
    }
  `}
`

export const Title = styled.h1<WrapperProps>`
  ${({ theme, size }) => css`
    font-size: ${size === 'small'
      ? theme.font.sizes.large
      : theme.font.sizes.xxlarge};
    color: ${theme.colors.text[100]};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.small};
    line-height: 2.4rem;
    color: ${theme.colors.text[300]};

    max-width: 400px;
  `}
`

export const GitHubIcon = styled(AiOutlineLink)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: inherit;
  `}
`
export const ProjectLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${theme.colors.primary[100]};
    font-size: ${theme.font.sizes.small};

    transition: ${theme.transitions.bounce};

    &:hover {
      color: ${theme.colors.primary[400]};
    }

    cursor: pointer;
  `}
`
