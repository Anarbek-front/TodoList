import { createSlice } from '@reduxjs/toolkit'

const storage = localStorage.getItem('todos')

const initialState = {
    todos: storage ? JSON.parse(storage) : [],
    filter: 'All',
    searchTodo: '',
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addNewTodo: (state, { payload }) => {
            state.todos.push({
                id: Date.now().toString(),
                text: payload,
                completed: false,
            })
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo: (state, { payload }) => {
            state.todos = state.todos.filter(({ id }) => id !== payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        toggleTodo: (state, { payload }) => {
            const todo = state.todos.find(({ id }) => id === payload)
            todo && (todo.completed = !todo.completed)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        setFilterTodo: (state, { payload }) => {
            state.filter = payload
        },
        setSearchTodo: (state, { payload }) => {
            state.searchTodo = payload
        },
        editTodo: ({ todos }, { payload }) => {
            const { idTodo, changeableTodo } = payload
            const todo = todos.find((todo) => todo.id === idTodo)
            if (todo) todo.text = changeableTodo
            localStorage.setItem('todos', JSON.stringify(todos))
        },
    },
})

export const selectFilteredTodos = ({ todos, searchTodo, filter }) => {
    let filtered = todos
    if (filter === 'Complete')
        return (filtered = todos.filter((todo) => todo.completed))
    else if (filter === 'Incomplete')
        return (filtered = todos.filter((todo) => !todo.completed))
    else if (filter === 'All') return todos
    else if (searchTodo.trim() !== '') {
        return (filtered = filtered.filter(({ text }) => {
            return text === searchTodo
        }))
    }
    return filtered
}

export const {
    addNewTodo,
    removeTodo,
    toggleTodo,
    setFilterTodo,
    setSearchTodo,
    editTodo,
} = todosSlice.actions
export default todosSlice.reducer
