import styles from '@/styles/HomeHeader.module.css';
import WavePattern from "@/components/WavePattern";

function homeHeader() {
  return (
      <div
        style={{
          overflowX: 'hidden'
        }}
      >
        <WavePattern isFlipped/>
        <header className={styles.container}>
          <h1 className={styles['main-title']}>Gustavo <br /> Mazurkiewitz</h1>
          <h2 className={styles.subtitle}>Desenvolvedor</h2>
        </header>
        <WavePattern />
      </div> 
  )
}

export default homeHeader