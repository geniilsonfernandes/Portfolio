/* istanbul ignore file */
import githubApi from 'service/axios/intance'
import githubEndpoints from 'service/endpoint'
import { IRepoResponse, IUserResponse } from 'service/endpoint/type'
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
  const user = await githubApi.get<IUserResponse>(
    githubEndpoints.getUserEndpoint(),
  )
  const repos = await githubApi.get<IRepoResponse[]>(
    githubEndpoints.getReposEndpoint(),
  )

  const filteredRepos = repos.data.filter(
    (repo) => repo.topics && repo.topics.includes('port'),
  )

  return {
    props: {
      repos: filteredRepos.map((repo) => ({
        ...repo,
        photo: createBaseUrl(repo.name),
        link: repo.html_url,
      })),
      user: user.data,
    },
  }
}
