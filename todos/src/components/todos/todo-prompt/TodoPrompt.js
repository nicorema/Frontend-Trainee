import React from 'react'
import Button from '../../common/button/Button'
import { useIntl } from 'gatsby-plugin-intl'
import {
  StyledOverlay,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './TodoPrompt.styles'

const TodoPrompt = ({
  closePrompt,
  createTodo,
  todoDescription,
  setTodoDescription,
}) => {
  const handleSumbitForm = event => {
    event.preventDefault()
    createTodo(todoDescription)
  }
  const intl = useIntl()

  return (
    <>
      <StyledOverlay
        data-testid="close-prompt"
        onClick={closePrompt}
      ></StyledOverlay>
      <StyledForm data-testid="create-todo" onSubmit={handleSumbitForm}>
        <StyledLabel htmlFor="description">{intl.formatMessage({ id: "todos.prompt.todo.description.label" })}</StyledLabel>
        <StyledInput
          data-testid="todo-description-input"
          id="description"
          placeholder={intl.formatMessage({ id: "todos.prompt.todo.description.placeholder" })}
          value={todoDescription}
          onChange={({ target }) => setTodoDescription(target.value)}
          required
        ></StyledInput>
        <Button label={intl.formatMessage({ id: "todos.prompt.todo.create.label" })} />
      </StyledForm>
    </>
  )
}

export default TodoPrompt
