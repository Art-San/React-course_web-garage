import { Button } from '../components/Button'
import { TaskList } from '../components/TaskList'
import TextComponent from '../components/TextComponent'
import { UserList } from '../components/UserList'

import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button />
      <UserList />
      <TextComponent />
      <TaskList />
    </div>
  )
}

export default HomePage
