/* istanbul ignore file */
import { gitHub } from 'service/api'

import Home, { HomeProps } from 'templates/Home'
import { createBaseUrl } from 'utils/createBaseUrl'
type Props = {
  repos: HomeProps['repos']
  user: HomeProps['user']
}

export default function Index({ repos, user }: Props) {
  return <Home repoHighlights={repos[0]} repos={repos} user={user} />
}

export async function getServerSideProps() {
  const repos = await gitHub.getRepos('port')

  const user = {
    userPhoto: repos[0].owner.avatar_url,
    title: 'Desenvolvedor Full-stack',
    subtitle: `Sou especialista em criar experiências digitais
        incríveis. Sou capaz de oferecer soluções robustas e eficientes para
        transformar sua visão em realidade. Vamos colaborar juntos para criar
        uma presença digital de sucesso para sua empresa.`,
    highlight:
      'Experiência em ReactJS, NextJs, Javascript, TypeScript e NodeJs.',
  } as HomeProps['user']

  return {
    props: {
      repos: repos.map((repo) => ({
        ...repo,
        photo: createBaseUrl(repo.name),
        link: repo.html_url,
      })),
      user: user,
    },
  }
}
