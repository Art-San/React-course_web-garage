import styles from './Button.module.css'
import stylesAdded from './AddedStyles.module.css'

export default function Button({ variant = 'primary' }) {
  const buttonClass = `${styles.button} ${styles[variant]}`
  return (
    <>
      <button className={buttonClass}>Кнопка</button>
      <a href="#" className={stylesAdded.link}>
        {' '}
        Просто ссылка
      </a>

      <div className={styles['bottom-block']}></div>
    </>
  )
}
