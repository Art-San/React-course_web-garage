import { useState } from 'react'

function MyComponent({ count = 0, increment, text, styles }) {
  return (
    <div className="">
      <p>{text}</p>
      <div style={styles}>
        <p>Счетчик: {count}</p>
        <button onClick={increment}>Увеличить</button>
      </div>
    </div>
  )
}

function withCounter(WrappedComponents, text, styles) {
  function WithCounterComponent(props) {
    const [count, setCount] = useState(props.initialCount || 0)

    const increment = () => {
      setCount(count + 1)
    }

    return (
      <WrappedComponents
        count={count}
        increment={increment}
        text={text}
        styles={styles}
        {...props}
      />
    )
  }

  return WithCounterComponent
}

export const EnhancedComponent1 = withCounter(MyComponent, 'красный', {
  backgroundColor: 'red'
})
export const EnhancedComponent2 = withCounter(MyComponent, 'синий', {
  backgroundColor: 'blue'
})
export const EnhancedComponent3 = withCounter(MyComponent, 'зеленый', {
  backgroundColor: 'green'
})
