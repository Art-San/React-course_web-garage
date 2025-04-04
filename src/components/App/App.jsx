import { useState } from 'react'
import { Button } from '../Button/Button'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <div
      data-theme={theme}
      className="flex flex-col items-center dark:bg-green-950 h-screen"
    >
      <h2 className="text-[1rem] dark:text-white ddd:text-red-500">
        React + Tailwind
      </h2>
      <Button />
      <div className="mx-auto py-20 w-2/3 perspective-distant">
        <button
          onClick={toggleTheme}
          className="bg-amber-900 px-3 py-1 rounded text-white cursor-pointer"
        >
          Переключить тему
        </button>
        <iframe
          src="https://player.vimeo.com/video/76979871"
          className="mx-auto w-[300px] aspect-video transform-3d rotate-x-60 rotate-z-35"
        />
      </div>
    </div>
  )
}

export default App
