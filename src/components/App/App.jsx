import { MyName } from '../MyName/myName'
import './App.css'

const test = 1
function App() {
  return (
    <>
      <div className="">
        <h1>Привет реакт</h1>
        <p>Это мой первый</p>
        {test}
        <MyName />
      </div>
    </>
  )
}

export default App
