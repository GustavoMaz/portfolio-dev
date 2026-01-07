import styles from '@/styles/MainNavigation.module.css'
import { symlinkSync } from 'fs'

function Navigation() {
  return (
      <nav className={styles.container}>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Início</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Projetos</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Sobre Mim</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#">Contato</a></li>
        </ul>
      </nav>
  )
}

export default Navigation