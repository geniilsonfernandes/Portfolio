import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: start;
    @media (max-width: ${theme.viewPorts.tablet}) {
      flex-direction: column;
      gap: 16px;
    }
  `}
`

export const Photo = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 20px;

    background: ${theme.colors.background[200]};
  `}
`

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const JobWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    &:first-child {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};
    }
  `}
`
export const JobDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.8rem;
    color: ${theme.colors.text[300]};
    padding-left: ${theme.spacings.xxsmall};
    border-left: 1px solid ${theme.colors.background[300]};
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text[500]};
  `}
`

export const Job = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text[100]};
  `}
`

export const Period = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.small};
    color: ${theme.colors.text[300]};
    padding-top: ${theme.spacings.xxsmall};
  `}
`

export const Cases = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.text[700]};
  `}
`

export const CaseItemPhoto = styled.img`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    border-radius: 8px;

    background: ${theme.colors.background[200]};
  `}
`
