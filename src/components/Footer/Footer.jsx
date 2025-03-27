import './Footer.css'

export function Footer() {
  const style = {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }

  return (
    <footer className="footer" style={style}>
      <p>Подвал сайта</p>
    </footer>
  )
}
