import style from './Layout.module.css'
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
}

const Layout = ({children}:Props) => {

  console.log(children)

  return (
    <div className={style.layout}>
      <NavBar/>
      <SideBar/>
    </div>
  )
}

export default Layout