import { useRouter } from 'next/router'
import React from 'react'
import { gitHub } from 'service/api'
import Project from 'templates/Project'

type Props = {
  readme: string
}

function Index({ readme }: Props) {
  const router = useRouter()

  const { id } = router.query as { id: string }

  return <Project projectName={id} readme={readme} />
}

export async function getStaticPaths() {
  const repos = await gitHub.getRepos('port')

  const paths = repos.map((repo) => ({
    params: { id: repo.name },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context: { params: { id: string } }) {
  const readme = await gitHub.getRepoReadme(context.params.id)

  return {
    props: {
      readme: readme,
    },
  }
}

export default Index
