import style from './NavBar.module.css'
import logo from '../../../assets/logo.svg'
import { IconBellFilled, IconMailFilled } from '@tabler/icons-react'

const notificationValue = 1;
const messageValue = 5;

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
              <span 
                className={style.badge} 
                style={{display: messageValue > 0 ? 'flex' : 'none'}
              }>{messageValue}</span>
            </span>
            <span className={style.icon}>
              <IconBellFilled size={28}/>
              <span 
                className={style.badge} 
                style={{display: notificationValue > 0 ? 'flex' : 'none'}}
              >{notificationValue}</span>
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