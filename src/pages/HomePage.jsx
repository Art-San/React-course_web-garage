import './HomePage.css'

function HomePage() {
  function handleEvent(event) {
    switch (event.type) {
      case 'click':
        alert('Нажата кнопка')
        break
      case 'mouseenter':
        console.log('Наведен курсор')
        break
      default:
        console.log('нифига')
        break
    }
  }

  return (
    <>
      <div onClick={handleEvent} onMouseEnter={handleEvent}>
        {' '}
        нажми или наведите
      </div>
    </>
  )
}

export default HomePage
