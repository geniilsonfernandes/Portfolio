import { ArrowUpRight } from 'lucide-react'
import * as S from './styles'

export type ProjectProps = {
  id?: string | number
  name: string
  description: string
  link: string
  photo: string
  repo: string
  order: number
} & S.WrapperProps

const Project = ({
  repo,
  photo,
  name,
  description,
  order,
  link,
}: ProjectProps) => {
  return (
    <S.Wrapper order={order}>
      <S.PhotoWrapper
        onClick={() => {
          window.open(repo, '_blank')
        }}
      >
        <img alt={name} src={photo} />
      </S.PhotoWrapper>
      <S.ProjectInfo>
        <S.ProjectInfoName>
          <S.Title>{name}</S.Title>
          <S.Description>{description} </S.Description>
          <S.LinkDeploy href={link} target="_blank" rel="noreferrer">
            ver projeto
          </S.LinkDeploy>
        </S.ProjectInfoName>
        <S.Links>
          <S.ProjectLink href={repo} target="_blank">
            <ArrowUpRight strokeWidth={1} />
          </S.ProjectLink>
        </S.Links>
      </S.ProjectInfo>
    </S.Wrapper>
  )
}

export default Project
