"use client";
import React from 'react'
import { TodoCard } from './todoCard'
import { useAtom } from 'jotai';
import { todoAtom } from '@/lib/jotai/atom';

const TodoList = () => {
    const [todos, setTodos] = useAtom(todoAtom);
    
    console.log(todos)
    return (
        <div className='mt-10 sm:grid sm:grid-cols-3 sm:gap-8 block'>
            {
                todos.length > 0 ? (
                    todos?.map((item, index) => (
                        <TodoCard key={index} todo={item} />
                    ))
                ): 'No items found'
                
            }
        </div>
    )
}

export default TodoList