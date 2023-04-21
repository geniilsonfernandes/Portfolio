import Head from 'components/Head'
import Project, { ProjectProps } from 'components/Project'
import * as S from './styles'

import Base from 'templates/Base'

export type HomeProps = {
  repoHighlights: Omit<ProjectProps, 'size' | 'isHighlighted'>
  repos: Omit<ProjectProps, 'size' | 'isHighlighted'>[]
  user: []
}

const Home = ({ repoHighlights, repos }: HomeProps) => {
  return (
    <Base>
      <Head />
      <S.Wrapper>
        <Project isHighlighted size="large" {...repoHighlights} />
      </S.Wrapper>
      <S.Grid>
        {repos.map((item) => (
          <Project key={item.id} {...item} size="small" />
        ))}
      </S.Grid>
    </Base>
  )
}

export default Home
