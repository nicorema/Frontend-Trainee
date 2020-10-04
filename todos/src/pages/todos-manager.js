import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import Layout from '../components/common/layout/Layout'
import TodoPrompt from '../components/todos/todo-prompt/TodoPrompt'
import TodosList from '../components/todos/todos-list/TodosList'
import { getCurrentLocation } from '../Utils'
import * as actions from '../redux/actions/todos'

const TodosManager = ({ todos, createTodo, deleteTodo, editTodo }) => {
  const [showPrompt, setShowPrompt] = useState(false)
  const [currentTodoDescription, setCurrentTodoDescription] = useState('')
  const [currentEditingTodoId, setCurrentEditingTodoId] = useState(null)
  const intl = useIntl()

  const handleDeleteTodo = todoId => {
    deleteTodo(todoId)
  }

  const handleNewTodo = async description => {
    let userLocation = null
    try {
      userLocation = await getCurrentLocation()
    } catch (err) {
      alert(intl.formatMessage({ id: "todos.manager.location.error" }))
      console.error(err)
    }

    if (!currentEditingTodoId) {
      createTodo(description, userLocation)
    } else {
      editTodo(currentEditingTodoId, description, userLocation)
    }
    setShowPrompt(false)
    setCurrentTodoDescription('')
  }

  const handleEditTodo = currentTodo => {
    setCurrentTodoDescription(currentTodo.description)
    setShowPrompt(true)
    setCurrentEditingTodoId(currentTodo.id)
  }

  const stickyAction = {
    label: intl.formatMessage({ id: "todos.manager.create.label" }),
    onClick: () => {
      setShowPrompt(true)
      setCurrentEditingTodoId(null)
    },
  }

  return (
    <Layout
      title={<FormattedMessage id="todos.manager.title" />}
      stickyAction={stickyAction}
    >
      <TodosList
        data-testid="list"
        todos={todos}
        deleteTodo={handleDeleteTodo}
        editTodo={handleEditTodo}
      />
      {showPrompt && (
        <TodoPrompt
          data-testid="prompt"
          closePrompt={() => setShowPrompt(false)}
          createTodo={handleNewTodo}
          todoDescription={currentTodoDescription}
          setTodoDescription={setCurrentTodoDescription}
        />
      )}
    </Layout>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: (todoDescription, location) =>
      dispatch(actions.createTodo(todoDescription, location)),
    deleteTodo: todoId => dispatch(actions.deleteTodo(todoId)),
    editTodo: (todoId, todoDescription, location) =>
      dispatch(actions.editTodo(todoId, todoDescription, location)),
  }
}

const mapStateToProps = state => {
  return { todos: state.app.todos }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosManager)
