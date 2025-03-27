import './HomePage.css'

function HomePage() {
  return (
    <>
      <div>Домашняя страница</div>
      <button
        onClick={() => {
          alert('кнопка нажата')
        }}
      >
        Кнопку нажать
      </button>
    </>
  )
}

export default HomePage
