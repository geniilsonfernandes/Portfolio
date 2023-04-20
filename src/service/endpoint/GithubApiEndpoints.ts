class GithubApiEndpoints {
  private owner: string

  constructor(owner: string) {
    this.owner = owner
  }

  getReadmeEndpoint(repo: string): string {
    return `/repos/${this.owner}/${repo}/readme`
  }

  getReposEndpoint(): string {
    return `/users/${this.owner}/repos`
  }

  getUserEndpoint(): string {
    return `/users/${this.owner}`
  }
}
export default GithubApiEndpoints
