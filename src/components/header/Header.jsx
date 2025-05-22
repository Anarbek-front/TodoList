import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterTodo, setSearchTodo } from '../../features/todos/todosSlice'
import Select from '../select/Select'
import { Input } from '../Input/Input'
import { Theme } from '../theme/Theme'
import './header.css'

export const options = ['All', 'Complete', 'Incomplete']

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('All')
    const [searchTodoText, setSearchTodoText] = useState('')
    const dispatch = useDispatch()

    const handleSelect = (value) => {
        setSelectedOption(value)
        dispatch(setFilterTodo(value))
    }

    const searchTodo = () => {
        dispatch(setSearchTodo(searchTodoText))
        dispatch(setFilterTodo(''))
        setSearchTodoText('')
    }

    return (
        <header>
            <Input
                onChange={(e) => setSearchTodoText(e.target.value)}
                value={searchTodoText}
                onSubmit={searchTodo}
                type="search"
                placeholder="Search note..."
            />
            <Select
                options={options}
                onSelect={handleSelect}
                selectedValue={selectedOption}
            />
            <Theme />
        </header>
    )
}

export default Header
