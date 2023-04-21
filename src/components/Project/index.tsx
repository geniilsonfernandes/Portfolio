import Stamp from 'components/Stamp'
import * as S from './styles'
import { useRouter } from 'next/router'

export type ProjectProps = {
  id?: string | number
  isHighlighted?: boolean
  name: string
  description: string
  link: string
  photo: string
  repo: string
} & S.WrapperProps

const Project = ({
  isHighlighted = false,
  size = 'small',
  description,
  link,
  photo,
  name,
}: ProjectProps) => {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/project/${name}`)
  }

  return (
    <S.Wrapper onClick={handleCardClick}>
      <S.PhotoWrapper size={size}>
        <S.ProjectPhoto alt={name} src={photo} />
        {isHighlighted && (
          <S.StampWrapper>
            <S.PremiumStamp />
            <Stamp />
          </S.StampWrapper>
        )}
      </S.PhotoWrapper>
      <S.ProjectInfo size={size}>
        <div>
          <S.Title size={size}>{name}</S.Title>
          <S.Description>{description}</S.Description>
        </div>
        <S.ProjectLink href={link} target="_blank">
          <S.GitHubIcon />
          {name}
        </S.ProjectLink>
      </S.ProjectInfo>
    </S.Wrapper>
  )
}

export default Project
