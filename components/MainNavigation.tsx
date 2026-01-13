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
              <a className='nav-link-home nav-link' href="#home">
                <AiOutlineHome />
              </a>
            </li>
            <li className='nav-item'><a className='nav-link' href="#projects">Projetos</a></li>
            <li className='nav-item'><a className='nav-link' href="#about">Sobre Mim</a></li>
            <li className='nav-item'><a className='nav-link' href="#contact">Contato</a></li>
          </ul>
        </nav>
    </>
  )
}

export default Navigation