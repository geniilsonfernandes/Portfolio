/* istanbul ignore file */
import { gitHub } from 'service/api'

import Home, { HomeProps } from 'templates/Home'
import { createBaseUrl } from 'utils/createBaseUrl'
type Props = {
  repos: HomeProps['repos']
  user: []
}

export default function Index({ repos, user }: Props) {
  return <Home repoHighlights={repos[0]} repos={repos} user={user} />
}

export async function getServerSideProps() {
  const repos = await gitHub.getRepos('port')

  return {
    props: {
      repos: repos.map((repo) => ({
        ...repo,
        photo: createBaseUrl(repo.name),
        link: repo.html_url,
      })),
      user: [],
    },
  }
}
