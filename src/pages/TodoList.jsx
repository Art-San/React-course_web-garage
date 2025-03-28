export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.completed ? (
            <s style={{ color: 'blue' }}>{todo.text}</s>
          ) : (
            todo.text
          )}
        </li>
      ))}
    </ul>
  )
}
