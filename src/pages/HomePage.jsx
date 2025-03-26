import { Button } from '../components/Button'

import './HomePage.css'

function HomePage({ click }) {
  const showMessage = (msg) => {
    alert(msg)
  }

  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button label={'Нажми меня'} onClick={click} />
      <Button
        label={'какоето сообщение'}
        onClick={() => {
          showMessage('привет')
        }}
      />
    </div>
  )
}

export default HomePage
