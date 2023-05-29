import Stamp from 'components/Stamp'
import * as S from './styles'

export type ProjectProps = {
  id?: string | number
  isHighlighted?: boolean
  name: string
  description: string
  link: string
  photo: string
  repo: string
  topics: string[]
} & S.WrapperProps

const Project = ({
  isHighlighted = false,
  link,
  photo,
  name,
  description,
  topics,
}: ProjectProps) => {
  const createLink = (name: string) => {
    return `https://${name}.vercel.app/`
  }

  const filteredTopics = topics.filter((topic, index) => topic !== 'port')

  return (
    <S.Wrapper>
      <S.PhotoWrapper>
        <img alt={name} src={photo} />
        {isHighlighted && (
          <S.StampWrapper>
            <S.PremiumStamp />
            <Stamp />
          </S.StampWrapper>
        )}
      </S.PhotoWrapper>
      <S.ProjectInfo>
        <S.Tags>
          {filteredTopics.map((topic, index) => (
            <S.Tag key={index}>{topic}</S.Tag>
          ))}
        </S.Tags>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Links>
          <S.ProjectLink href={link} target="_blank">
            <S.GitHubIcon />
            {name}
          </S.ProjectLink>
          <S.ProjectLink href={createLink(name)} target="_blank">
            <S.LineLinkIcon />
            Preview
          </S.ProjectLink>
        </S.Links>
      </S.ProjectInfo>
    </S.Wrapper>
  )
}

export default Project
