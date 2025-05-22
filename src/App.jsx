import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/header/Header'
import { List } from './components/list/List'
import { AddButton } from './components/addButton/AddButton'
import { Modal } from './components/modal/Modal'
import { Button } from './components/button/Button'
import { Input } from './components/Input/Input'
import { addNewTodo } from './features/todos/todosSlice'
import './app.css'
 
export const errorText = 'Поле ввода не может быть пустым!'

export const App = () => {
    const [openModal, setOpenModal] = useState(false)
    const [inputErrorText, setInputErrorText] = useState('')
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const handleNewNoteModalOpenClose = () => {
        setOpenModal((prevState) => !prevState)
        setInputErrorText('')
    }

    const handleAddTodo = () => {
        if (todo.trim()) dispatch(addNewTodo(todo))
        else return setInputErrorText(errorText)
        return setTodo(''),handleNewNoteModalOpenClose(), setInputErrorText('')
    }

    return (
        <>
            <div className="container">
                <h1>Todo List</h1>
                <Header />
                <List />
                <AddButton onClick={handleNewNoteModalOpenClose} />
            </div>
            <Modal isOpen={openModal} onClose={handleNewNoteModalOpenClose}>
                <div className="new_note_modal_container">
                    <p className="new_note">new note</p>
                    <Input
                        onChange={(e) => setTodo(e.target.value)}
                        onSubmit={handleAddTodo}
                        type="text"
                        value={todo}
                        placeholder="Input your note..."
                        errorText={inputErrorText}
                    />
                    <div className="modal_buttons">
                        <Button
                            content="cancel"
                            onClick={handleNewNoteModalOpenClose}
                            className={'cancel_button'}
                        />
                        <Button
                            content="apply"
                            className={'apply_button'}
                            onClick={handleAddTodo}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}