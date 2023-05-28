import styled, { css } from 'styled-components'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiNodedotjs,
  SiTsnode,
  SiExpress,
  SiGraphql,
  SiJest,
  SiStorybook,
  SiJavascript,
  SiPrisma,
  SiTypeform,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVuedotjs,
} from 'react-icons/si'
import theme from 'styles/theme'
import { Box as BoxCustom } from 'components/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.large} 0;
    @media (max-width: ${theme.viewPorts.tablet}) {
      flex-direction: column;
      gap: 32px;
    }
  `}
`

export const LeftSide = styled.div`
  flex: 50%;
`

export const Description = styled.div`
  position: sticky;
  top: 0;
`

export const RightSide = styled.div`
  ${({ theme }) => css`
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: ${theme.spacings.large};
    @media (max-width: ${theme.viewPorts.tablet}) {
      flex: 100%;
    }
  `}
`

export const Box = styled(BoxCustom)`
  ${({ theme }) => css`
    gap: 16px;
    width: 100%;
    max-width: 450px;

    @media (max-width: ${theme.viewPorts.tablet}) {
      max-width: 100%;
    }
  `}
`
export const BoxHead = styled.div`
  display: flex;
`
export const BoxTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.small};

    color: ${theme.colors.text[300]};

    gap: 4px;
  `}
`

export const BoxBody = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`

export const IconsGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 16px;
    @media (max-width: ${theme.viewPorts.tablet}) {
      grid-template-columns: repeat(5, 1fr);
    }
  `}
`

const stylesIcon = css`
  font-size: 3.4rem;
  color: ${theme.colors.background[100]};

  transition: ${theme.transitions.bounce};

  &:hover {
    color: ${theme.colors.primary[100]};
    transform: scale(0.9);
  }
`

export const ReactIcon = styled(SiReact)`
  ${stylesIcon}
`

export const NextIcon = styled(SiNextdotjs)`
  ${stylesIcon}
`

export const TypescriptIcon = styled(SiTypescript)`
  ${stylesIcon}
`

export const StyledComponentsIcon = styled(SiStyledcomponents)`
  ${stylesIcon}
`

export const NodeIcon = styled(SiNodedotjs)`
  ${stylesIcon}
`

export const TsNodeIcon = styled(SiTsnode)`
  ${stylesIcon}
`

export const ExpressIcon = styled(SiExpress)`
  ${stylesIcon}
`

export const GraphqlIcon = styled(SiGraphql)`
  ${stylesIcon}
`

export const JestIcon = styled(SiJest)`
  ${stylesIcon}
`

export const StorybookIcon = styled(SiStorybook)`
  ${stylesIcon}
`

export const JavascriptIcon = styled(SiJavascript)`
  ${stylesIcon}
`

export const PrismaIcon = styled(SiPrisma)`
  ${stylesIcon}
`

export const TypeformIcon = styled(SiTypeform)`
  ${stylesIcon}
`

export const HtmlIcon = styled(SiHtml5)`
  ${stylesIcon}
`

export const CssIcon = styled(SiCss3)`
  ${stylesIcon}
`

export const GitIcon = styled(SiGit)`
  ${stylesIcon}
`

export const VueIcon = styled(SiVuedotjs)`
  ${stylesIcon}
`
