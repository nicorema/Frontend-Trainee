import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Layout from '../components/common/layout/Layout'
import Map from '../components/map/Map'

const TodosLog = ({ todos }) => {
  const markers = todos.filter(todo => todo.location)

  return (
    <Layout title={<FormattedMessage id="todos.log.title" />}>
      <div>
        <Map data-testid="map" markers={markers} />
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return { todos: state.app.todos }
}

export default connect(mapStateToProps)(TodosLog)
