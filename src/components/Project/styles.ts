import styled, { css } from 'styled-components'

import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { MdWorkspacePremium } from 'react-icons/md'

export type WrapperProps = {
  size?: 'small' | 'large'
}

type ProjectProps = {
  order: number
}

export const Wrapper = styled.div<ProjectProps>`
  ${({ order }) => css`
    position: sticky;
    top: ${order * 10 + 30}px;
    z-index: 1;
    box-shadow: 0px -7px 20px 13px rgb(24 24 24 / 76%);
    overflow: hidden;
    border-radius: 16px;
  `}
`

export const PhotoWrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    background: ${theme.colors.background[200]};
    border-radius: ${theme.radius.md};
    width: 100%;
    height: 60vh;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.01);
      }
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
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text[100]};

    text-transform: capitalize;
  `}
`

export const ProjectInfoName = styled.div`
  ${({ theme }) => css``}
`
export const ProjectInfo = styled.div<WrapperProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small} 0;
    background: ${theme.colors.background[900]};
    border-radius: ${theme.radius.md};
  `}
`

export const LinkDeploy = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-size: ${theme.font.sizes.small};
    padding-top: 16px;
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text[600]};
    font-size: ${theme.font.sizes.small};

    line-height: 1.7;
    padding-top: ${theme.spacings.xsmall};
    max-width: 80%;
  `}
`

export const Links = styled.div`
  display: flex;
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
    color: #fff;

    border-radius: 100%;
    padding: 8px 8px;
    border: 1px solid #fff;
    font-size: ${theme.font.sizes.xhuge};

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
