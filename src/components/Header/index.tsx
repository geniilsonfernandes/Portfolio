import Menu from 'components/Menu'
import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.LogoIcon />
      </S.LogoWrapper>
      <Menu />
    </S.Wrapper>
  )
}

export default Header
