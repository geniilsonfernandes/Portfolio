import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}
const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Base
