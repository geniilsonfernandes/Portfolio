import Header from 'components/Header'
import * as S from './styles'
import Footer from 'components/Footer'

type BaseProps = {
  children: React.ReactNode
}
const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <div>{children}</div>
        <Footer />
      </S.Wrapper>
    </S.Container>
  )
}

export default Base
