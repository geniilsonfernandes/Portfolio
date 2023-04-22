import Head, { HeadProps } from 'components/Head'
import Project, { ProjectProps } from 'components/Project'
import * as S from './styles'

import Base from 'templates/Base'
import About from 'components/About'

export type HomeProps = {
  repoHighlights: Omit<ProjectProps, 'size' | 'isHighlighted'>
  repos: Omit<ProjectProps, 'size' | 'isHighlighted'>[]
  user: HeadProps
}

const Home = ({ repoHighlights, repos, user }: HomeProps) => {
  return (
    <Base>
      <Head {...user} />
      <S.Wrapper>
        <Project isHighlighted size="large" {...repoHighlights} />
      </S.Wrapper>
      <S.Grid>
        {repos.map((item) => (
          <Project key={item.id} {...item} size="small" />
        ))}
      </S.Grid>
      <About />
    </Base>
  )
}

export default Home
