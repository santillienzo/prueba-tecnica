import style from './NavBar.module.css'
import logo from '../../../assets/logo.svg'
import { IconBellFilled, IconMailFilled } from '@tabler/icons-react'

const NavBar = () => {
  return (
    <header className={style.navbar}>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      <div className={style.userActionsContainer}>
        <h2 className={style.titlePage}>Sitios</h2>
        <div className={style.userActionsIcons}>
          <div className={style.actionsIcons}>
            <span className={style.icon}>
              <IconMailFilled size={28}/>
              <span className={style.badge}>2</span>
            </span>
            <span className={style.icon}>
              <IconBellFilled size={28}/>
              <span className={style.badge}>3</span>
            </span>
          </div>
          <div className={style.userActionsLogo}>
            <span>User</span>
            <span>Marketing</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar