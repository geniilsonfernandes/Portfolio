import axios, { AxiosInstance } from 'axios'
import { IRepoResponse } from 'service/DTO/type'

class GithubApi {
  private axiosInstance: AxiosInstance
  private username: string

  constructor(username: string) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.github.com/',
    })
    this.username = username
  }

  public async getRepos(filterKey: string): Promise<IRepoResponse[]> {
    const { data } = await this.axiosInstance.get<IRepoResponse[]>(
      `/users/${this.username}/repos`,
    )

    const filteredRepos = data.filter(
      (repo) => repo.topics && repo.topics.includes(filterKey),
    )
    return filteredRepos
  }

  public async getRepo(repoName: string): Promise<IRepoResponse> {
    const { data } = await this.axiosInstance.get<IRepoResponse>(
      `/repos/${this.username}/${repoName}`,
    )
    return data
  }

  public async getRepoReadme(repoName: string): Promise<string> {
    const { data } = await this.axiosInstance.get(
      `/repos/${this.username}/${repoName}/readme`,
    )

    const decoder = new TextDecoder('utf-8')
    const content = decoder.decode(
      new Uint8Array(
        atob(data.content)
          .split('')
          .map((c) => c.charCodeAt(0)),
      ),
    )

    const regex = /!\[(.*?)\]\((.*?)\)/g
    const newContent = content.replace(
      regex,
      `<img alt="$1" src="https://raw.githubusercontent.com/${this.username}/${repoName}/main/$2" style="max-height: 300px;">`,
    )

    return newContent
  }
}

export default GithubApi
