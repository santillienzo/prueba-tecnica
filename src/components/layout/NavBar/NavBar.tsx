import style from './NavBar.module.css'
import { IconBellFilled, IconMailFilled, IconMenu2 } from '@tabler/icons-react'

const messageValue = 1;
const notificationValue = 4;

const NavBar = () => {

  return (
    <header className={style.navbar}>
      {/* Este elemento solo se va a mostrar cuando nos encontremos en pantallas menores a 768px */}
      <div className={style.toggleMenu}>
        <IconMenu2/>
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