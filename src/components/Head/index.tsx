import { Subtitle, Title } from 'components/styles'
import * as S from './styles'

export type HeadProps = {
  userPhoto: string
  title: string
  subtitle: string
  highlight: string
}

const socialButtons = [
  {
    icon: <S.GitHubIcon />,
    url: 'https://github.com/geniilsonfernandes',
  },
  {
    icon: <S.LinkedInIcon />,
    url: 'https://www.linkedin.com/in/genilson-fernandes/',
  },
  {
    icon: <S.TwitterIcon />,
    url: 'https://twitter.com/genilsonf_',
  },
]

const Head = ({ highlight, subtitle, title, userPhoto }: HeadProps) => (
  <S.Wrapper>
    <S.Photo src={userPhoto} alt={title} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Subtitle highlight>{highlight}</Subtitle>
    <S.Social>
      {socialButtons.map((button) => (
        <S.IconWrapper key={button.url} href={button.url} target="_blank">
          {button.icon}
        </S.IconWrapper>
      ))}
    </S.Social>
  </S.Wrapper>
)

export default Head
