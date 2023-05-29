/* istanbul ignore file */
import { gitHub } from 'service/api'

import Home, { HomeProps } from 'templates/Home'
import { createBaseUrl } from 'utils/createBaseUrl'
type Props = {
  repos: HomeProps['repos']
  user: HomeProps['user']
}

export default function Index({ repos, user }: Props) {
  console.log(repos)

  return <Home repoHighlights={repos[0]} repos={repos} user={user} />
}

export async function getServerSideProps() {
  const repos = await gitHub.getRepos('port')

  const user = {
    userPhoto: repos[0].owner.avatar_url,
    title: 'Desenvolvedor Full-stack',
    subtitle: `Sou um desenvolvedor front-end com 2 anos de experiência na criação de interfaces de usuário atraentes e
responsivas para sites e aplicativos web.`,
    highlight: `Tenho conhecimento em JavaScript, ReactJs, TypeScript,
StyledComponents, NextJs, NodeJs, Jest, Testing Library e GIT`,
  } as HomeProps['user']

  const orderedReposByMoreRecent = repos.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )

  return {
    props: {
      repos: orderedReposByMoreRecent.map((repo) => ({
        ...repo,
        photo: createBaseUrl(repo.name),
        link: repo.html_url,
      })),
      user: user,
    },
  }
}
