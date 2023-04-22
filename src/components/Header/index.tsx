import Menu from 'components/Menu'
import * as S from './styles'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }
  return (
    <S.Wrapper>
      <S.LogoWrapper onClick={handleLogoClick}>
        <S.LogoIcon />
      </S.LogoWrapper>
      <Menu />
    </S.Wrapper>
  )
}

export default Header
