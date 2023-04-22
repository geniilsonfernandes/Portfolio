import MediaComponent from 'components/MediaComponent'
import * as S from './styles'
import useModal from 'hook/useModal'
import { RiArrowDropDownLine, RiArrowDropLeftFill } from 'react-icons/ri'
import { useRouter } from 'next/router'

type MenuProps = {
  footer?: boolean
}

const Menu = ({ footer }: MenuProps) => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const { closeModal, openModal, isOpen } = useModal()

  const handleOpenMenu = () => {
    openModal()
  }

  const handleCloseMenu = () => {
    closeModal()
  }

  const handleMenuClick = () => {
    if (isOpen) {
      handleCloseMenu()
    } else {
      handleOpenMenu()
    }
  }

  const handleBackClick = () => {
    router.back()
  }

  return (
    <>
      {isHome ? (
        <>
          <S.MenuWrapper>
            <MediaComponent mediaQuery="(max-width: 768px)">
              <S.Button onClick={handleOpenMenu}>
                Menu <RiArrowDropDownLine size={20} />
              </S.Button>
            </MediaComponent>
            <S.MenuList>
              <MediaComponent mediaQuery="(min-width: 768px)">
                <S.MenuLink href="#projects">Projects</S.MenuLink>
                <S.MenuLink href="#about">About</S.MenuLink>
                <S.MenuLink href="#skills">Skills</S.MenuLink>
              </MediaComponent>
            </S.MenuList>

            {footer && (
              <S.FooterOwner>genilsonfernandes.dev © 2023</S.FooterOwner>
            )}
          </S.MenuWrapper>
          {isOpen && (
            <S.Overlay>
              <S.OverlayClick onClick={handleCloseMenu} />
              <S.MenuFullWrapper>
                <S.MenuFullHead>
                  <S.CloseMenu onClick={handleCloseMenu} />
                </S.MenuFullHead>

                <S.MenuLink href="#home" onClick={handleMenuClick}>
                  Home
                </S.MenuLink>
                <S.MenuLink href="#projects" onClick={handleMenuClick}>
                  Projects
                </S.MenuLink>
                <S.MenuLink href="#about" onClick={handleMenuClick}>
                  About
                </S.MenuLink>
                <S.MenuLink href="#skills" onClick={handleMenuClick}>
                  Skills
                </S.MenuLink>
              </S.MenuFullWrapper>
            </S.Overlay>
          )}
        </>
      ) : (
        <>
          <S.MenuWrapper>
            <S.Button onClick={handleBackClick}>
              Voltar <RiArrowDropLeftFill size={20} />
            </S.Button>
            {footer && (
              <S.FooterOwner>Genilsonfernandes.dev © 2023</S.FooterOwner>
            )}
          </S.MenuWrapper>
        </>
      )}
    </>
  )
}

export default Menu
