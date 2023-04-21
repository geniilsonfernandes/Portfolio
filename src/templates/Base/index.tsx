import Header from 'components/Header'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}
const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <div>{children}</div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Base
