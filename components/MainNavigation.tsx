import styles from '@/styles/MainNavigation.module.css'
import { AiOutlineHome } from 'react-icons/ai'

function Navigation() {
  return (
      <nav className={styles.container}>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <a className={styles['nav-link-home']} href="#">
              <AiOutlineHome />
            </a>
          </li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Projetos</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Sobre Mim</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Contato</a></li>
        </ul>
      </nav>
  )
}

export default Navigation