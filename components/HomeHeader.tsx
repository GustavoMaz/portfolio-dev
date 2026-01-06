import styles from '@/styles/HomeHeader.module.css';

function homeHeader() {
  return (
    <header className={styles.container}>
      <h1 className={styles['main-title']}>Gustavo <br /> Mazurkiewitz</h1>
      <h2 className={styles.subtitle}>Desenvolvedor</h2>
    </header>
  )
}

export default homeHeader