import * as S from './styles'
import Base from 'templates/Base'

type ProjectProps = {
  projectName: string
  readme: string
}

const Project = ({ projectName, readme }: ProjectProps) => {
  return (
    <Base>
      <div>
        <h1>{projectName}</h1>
      </div>
      <S.Wrapper>
        <div dangerouslySetInnerHTML={{ __html: readme }}></div>
      </S.Wrapper>
    </Base>
  )
}

export default Project
