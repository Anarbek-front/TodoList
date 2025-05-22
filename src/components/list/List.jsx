import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    removeTodo,
    selectFilteredTodos,
    editTodo,
} from '../../features/todos/todosSlice.js'
import { Task } from '../task/Task'
import { Modal } from '../modal/Modal'
import { Button } from '../button/Button'
import detective from '../../assets/icons/Detective-check-footprint 1.png'
import { Input } from '../Input/Input.jsx'
import { errorText } from '../../App.jsx'
import './list.css'

export const List = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [idTodo, setIdTodo] = useState('')
    const [changeableTodo, setChangeableTodo] = useState('')
    const [errorInputText, setErrorInputText] = useState('')
    const todos = useSelector((state) => selectFilteredTodos(state.todos))
    const dispatch = useDispatch()

    const deleteModalHandle = () => setDeleteModal((prevState) => !prevState)

    const editModalHandle = () => setEditModal((prevState) => !prevState)

    const cancelEditModal = () => editModalHandle()

    const handleEditIcon = (text, id) => {
        setIdTodo(id)
        setChangeableTodo(text)
        editModalHandle()
        setErrorInputText('')
    }

    const handleEditTodo = () => {
        if (changeableTodo.trim())
            dispatch(editTodo({ idTodo, changeableTodo }))
        else return setErrorInputText(errorText)
        return setIdTodo(''), editModalHandle()
    }

    const handleDeleteIcon = (id) => {
        setIdTodo(id), deleteModalHandle()
    }

    const deleteTodo = () => {
        dispatch(removeTodo(idTodo)), setIdTodo(''), deleteModalHandle()
    }

    return (
        <>
            <Modal isOpen={deleteModal} onClose={handleDeleteIcon}>
                <div className="delete_modal_container">
                    <p className="delete_modal_title">Delete</p>
                    <div className="delete_modal_buttons">
                        <Button
                            className={'cancel_button'}
                            content="cancel"
                            onClick={deleteModalHandle}
                        />
                        <Button
                            className={'delete_button'}
                            content="delete"
                            onClick={deleteTodo}
                        />
                    </div>
                </div>
            </Modal>
            <Modal isOpen={editModal} onClose={handleEditIcon}>
                <div className="new_note_modal_container">
                    <p className="new_note">Edit Todo</p>
                    <Input
                        onChange={(e) => setChangeableTodo(e.target.value)}
                        onSubmit={handleEditTodo}
                        type="text"
                        value={changeableTodo}
                        errorText={errorInputText}
                    />
                    <div className="modal_buttons">
                        <Button
                            content="cancel"
                            onClick={cancelEditModal}
                            className={'cancel_button'}
                        />
                        <Button
                            content="edit"
                            className={'apply_button'}
                            onClick={handleEditTodo}
                        />
                    </div>
                </div>
            </Modal>
            <ul className="list_todo">
                {todos.length === 0 && (
                    <div className="empty_icon">
                        <img src={detective} />
                        <p>Empty ...</p>
                    </div>
                )}
                {todos.map(({ text, id, completed }) => (
                    <Task
                        id={id}
                        key={id}
                        text={text}
                        completed={completed}
                        clickDeleteIcon={() => handleDeleteIcon(id)}
                        clickEditIcon={() => handleEditIcon(text, id)}
                    />
                ))}
            </ul>
        </>
    )
}
