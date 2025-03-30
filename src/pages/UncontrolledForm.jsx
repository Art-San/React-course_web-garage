import { useRef } from 'react'

function UncontrolledForm() {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    alert('Имя было отправлено: ' + inputRef.current.value)

    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default UncontrolledForm

// function UncontrolledForm() {
//   const handleSubmit = (event) => {
//     event.preventDefault()

//     const inputValue = event.target.elements.nameInput.value

//     alert('Имя было отправлено: ' + inputValue)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input type="text" name="nameInput" />
//       </label>
//       <button type="submit">Отправить</button>
//     </form>
//   )
// }

// export default UncontrolledForm
