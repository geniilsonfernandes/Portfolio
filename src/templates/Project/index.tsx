import Base from 'templates/Base'
import * as S from './styles'

type ProjectProps = {
  projectName: string
  readme: string
}

const Project = ({ readme }: ProjectProps) => {
  return (
    <Base>
      <S.Wrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: readme,
          }}
        ></div>
      </S.Wrapper>
    </Base>
  )
}

export default Project
