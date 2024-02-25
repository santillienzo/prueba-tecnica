import { IconArchive, IconBorderAll, IconBuilding, IconCalendarMonth, IconChartPie, IconCreditCard, IconMoon, IconPhone, IconSearch, IconSettings, IconUserCircle } from '@tabler/icons-react'
import style from './SideBar.module.css'
import logo from '../../../assets/logo.svg'


interface ILinkItem {
  title: string;
  path: string;
  icon: JSX.Element;
  selected?: boolean;
}

const links: ILinkItem[] = [
  {
    title: 'Panel',
    path: '/',
    icon: <IconBorderAll />
  },
  {
    title: 'Sitios',
    path: '/sitios',
    icon: <IconArchive />,
    selected: true
  },
  {
    title: 'Calendario',
    path: '/calendario',
    icon: <IconCalendarMonth />
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <IconUserCircle />
  },
  {
    title: 'Compañía',
    path: '/compañia',
    icon: <IconBuilding />
  },
  {
    title: 'Buscar leads',
    path: '/buscar-leads',
    icon: <IconSearch />
  },
  {
    title: 'Pagos',
    path: '/pagos',
    icon: <IconCreditCard />
  },
  {
    title: 'Reportes',
    path: '/reportes',
    icon: <IconChartPie />
  }
]

const otherLinks: ILinkItem[] = [
  {
    title: 'Ajustes',
    path: '/ajustes',
    icon: <IconSettings />
  },
  {
    title: 'Modo noche',
    path: '/modo-noche',
    icon: <IconMoon />
  },
  {
    title: 'Solicitar ayuda',
    path: '/solicitar-ayuda',
    icon: <IconPhone />
  }
]

const LinkItem = ({title, icon, selected}: ILinkItem)=>{
  return (
    <li className={`${style.linkItem} ${selected && style.itemSelected}`}>
      <span className={style.linkIcon}>{icon}</span>
      <span className={style.linkText}>{title}</span>
    </li>
  )
}

const SideBar = () => {
  return (
    <nav className={style.sidebar}>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      <ul className={style.principalLinks}>
        {
          links.map((link, i) =>(
            <LinkItem 
              key={i} 
              title={link.title} 
              icon={link.icon} 
              path={link.path}
              selected={link.selected}
            />
          ))
        }
      </ul>
      <ul className={style.otherLinks}>
        {
          otherLinks.map((link,i) =>(
            <LinkItem key={i} title={link.title} icon={link.icon} path={link.path}/>
          ))
        }
      </ul>
    </nav>
  )
}

export default SideBar