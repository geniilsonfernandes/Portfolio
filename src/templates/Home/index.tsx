import Header from 'components/Header'
import * as S from './styles'
import Head from 'components/Head'
import Project, { ProjectProps } from 'components/Project'

import React from 'react'
import Base from 'templates/Base'

export type HomeProps = {
  repoHighlights: Omit<ProjectProps, 'size' | 'isHighlighted'>
  repos: Omit<ProjectProps, 'size' | 'isHighlighted'>[]
  user: []
}

const Home = ({ repoHighlights, repos }: HomeProps) => {
  return (
    <Base>
      <Header />
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
