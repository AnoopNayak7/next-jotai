import React from 'react'
import { TodoCard } from './todoCard'

const TodoList = () => {
  return (
    <div className='mt-10 sm:grid sm:grid-cols-3 sm:gap-8 block'>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
    </div>
  )
}

export default TodoList