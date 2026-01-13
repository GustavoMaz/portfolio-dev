import '@/styles/MainNavigation.css'
import { AiOutlineHome } from 'react-icons/ai'
import MainNavigationToggle from './MainNavigationToggle'

function Navigation() {
  return (
    <>
    <MainNavigationToggle />
        <nav className='container'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a className='nav-link-home nav-link' href="#">
                <AiOutlineHome />
              </a>
            </li>
            <li className='nav-item'><a className='nav-link' href="#">Projetos</a></li>
            <li className='nav-item'><a className='nav-link' href="#">Sobre Mim</a></li>
            <li className='nav-item'><a className='nav-link' href="#">Contato</a></li>
          </ul>
        </nav>
    </>
  )
}

export default Navigation