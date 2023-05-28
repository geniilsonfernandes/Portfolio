import styled, { css } from 'styled-components'

import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'
import { MdWorkspacePremium } from 'react-icons/md'
import { Box } from 'components/styles'

export type WrapperProps = {
  size?: 'small' | 'large'
}

export const Wrapper = styled(Box)``

export const PhotoWrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    background: ${theme.colors.background[200]};
    border-radius: ${theme.radius.md};
    width: 100%;
    height: 100px;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${theme.radius.md};
    }
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

export const Title = styled.h1<WrapperProps>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text[100]};

    text-transform: capitalize;
  `}
`

export const ProjectInfo = styled.div<WrapperProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding-top: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text[600]};
    font-size: ${theme.font.sizes.small};
    text-align: justify;
    line-height: 1.5;
  `}
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 16px;
`

export const GitHubIcon = styled(AiFillGithub)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: inherit;
  `}
`
export const LineLinkIcon = styled(AiOutlineLink)`
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

    text-transform: capitalize;

    &:hover {
      color: ${theme.colors.primary[400]};
    }

    cursor: pointer;
  `}
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
export const Tag = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background[700]};
    border-radius: ${theme.radius.md};
    padding: 8px 8px;
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
