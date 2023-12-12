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
    title: 'Full stack Developer & UI Designer',
    subtitle: `Sou um desenvolvedor apaixonado por resolver problemas complexos, buscando sempre aprimorar habilidades técnicas e criar experiências impactantes.`,
    highlight: `Tenho conhecimento em Arquitetura de software · Controle de versão · Banco de dados · SCRUM · Node js · SQL · .NET · C# · AWS · Padrões de design · Docker · Prisma orm · React.js e Next.js · JavaScript / TypeScript · Redux.`,
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
