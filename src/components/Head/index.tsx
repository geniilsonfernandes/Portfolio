import * as S from './styles'

const socialButtons = [
  {
    icon: <S.GitHubIcon />,
    url: 'e',
  },
  {
    icon: <S.LinkedInIcon />,
    url: '31',
  },
  {
    icon: <S.TwitterIcon />,
    url: '312',
  },
]
const Head = () => (
  <S.Wrapper>
    <S.Photo src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" />
    <S.Title>Software designer, founder, and</S.Title>
    <S.Subtitle>
      I’m Spencer, a software designer and entrepreneur based in New York City.
      I’m Spencer, a software designer and entrepreneur based in New York City.
      I’m Spencer, a software designer and entrepreneur based in New York City.
    </S.Subtitle>
    <S.Social>
      {socialButtons.map((button) => (
        <>
          <S.IconWrapper key={button.url} href={button.url} target="_blank">
            {button.icon}
          </S.IconWrapper>
        </>
      ))}
    </S.Social>
  </S.Wrapper>
)

export default Head
