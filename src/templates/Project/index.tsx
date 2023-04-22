import * as S from './styles'
import Base from 'templates/Base'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type ProjectProps = {
  projectName: string
  readme: string
}

const Project = ({ projectName, readme }: ProjectProps) => {
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
