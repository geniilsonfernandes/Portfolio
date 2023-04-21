import MediaComponent from 'components/MediaComponent'
import * as S from './styles'
import useModal from 'hook/useModal'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Menu = () => {
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

  return (
    <>
      <S.MenuWrapper>
        <MediaComponent mediaQuery="(max-width: 768px)">
          <S.Button onClick={handleOpenMenu}>
            Menu <RiArrowDropDownLine size={20} />
          </S.Button>
        </MediaComponent>

        <MediaComponent mediaQuery="(min-width: 768px)">
          <S.MenuLink href="#home">Home</S.MenuLink>
          <S.MenuLink href="#projects">Projects</S.MenuLink>
          <S.MenuLink href="#about">About</S.MenuLink>
          <S.MenuLink href="#skills">Skills</S.MenuLink>
        </MediaComponent>
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
  )
}

export default Menu
