import { useState } from 'react'
import {
  validatePassword,
  checkPasswordMatch,
  checkRequiredFields
} from './validators'
import './RegForm.css'

function RegForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    selectedYear: ''
  })

  const [password, setPassword] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [requiredFieldsError, setRequiredFieldsError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setIsPasswordValid(validatePassword(newPassword))
    setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword))
  }

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)
    setPasswordMatch(checkPasswordMatch(password, newConfirmPassword))
  }

  const years = Array.from(
    { length: 40 },
    (_, i) => new Date().getFullYear() - i
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    const allFieldsFilled = checkRequiredFields([
      data.name,
      data.email,
      password,
      confirmPassword,
      data.selectedYear
    ])

    const isFormValid = allFieldsFilled && isPasswordValid && passwordMatch

    if (!isFormValid) {
      setRequiredFieldsError(true)
      setShowSuccessMessage(false)
      return
    }

    setRequiredFieldsError(false)
    setShowSuccessMessage(true)

    const formData = {
      name: data.name,
      email: data.email,
      password: password,
      confirmPassword,
      selectedYear: data.selectedYear
    }

    alert(JSON.stringify(formData, null, 2))

    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleReset = () => {
    setData({
      name: '',
      email: '',
      selectedYear: ''
    })
    setPassword('')
    setIsPasswordValid('')
    setConfirmPassword('')
  }

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        {!isPasswordValid && (
          <div className="error-message">
            Пароль должен состоять из латинских букв и цифр, а также быть не
            менее 8 символов
          </div>
        )}

        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ color: passwordMatch ? 'green' : 'red' }}
        />
        {!passwordMatch && (
          <div className="error-message">Пароли пока не совпадают</div>
        )}

        <select
          name="selectedYear"
          value={data.selectedYear}
          onChange={handleChange}
        >
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => (
            <option key={year.toString()} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button type="submit">Отправить</button>
        <button type="reset" onClick={handleReset}>
          Очистить форму
        </button>
        {requiredFieldsError && (
          <div className="error-message">Проверьте заполнение полей формы</div>
        )}
        {showSuccessMessage && (
          <div className="success-message">Данные успешно отправлены</div>
        )}
      </form>
    </div>
  )
}

export default RegForm
