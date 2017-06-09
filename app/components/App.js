/**
 * Created by yuan on 2017/6/9.
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App