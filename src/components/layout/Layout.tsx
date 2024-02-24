import style from './Layout.module.css'
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
}

const Layout = ({children}:Props) => {

  return (
    <div className={style.layout}>
      <NavBar/>
      <div className={style.content}>
        <SideBar/>
        <div className={style.childrenWrapper}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout