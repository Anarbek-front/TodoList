import { useDispatch } from 'react-redux'
import { Checkbox } from '../checkbox/Checkbox'
import { toggleTodo } from '../../features/todos/todosSlice'
import './task.css'

export const Task = ({
    id,
    text = 'NOTE',
    completed,
    clickDeleteIcon,
    clickEditIcon,
}) => {
    const dispatch = useDispatch()

    const changeCheckbox = () => {
        dispatch(toggleTodo(id))
    }

    return (
        <div className="task_container">
            <div className="task_cheked_and_title">
                <Checkbox checked={completed} onChange={changeCheckbox} />
                <div className={`task_title ${completed ? 'done' : ''}`}>
                    {text}
                </div>
            </div>
            <div className="edit_delete_icon">
                <svg
                    width="14.001709"
                    height="14.001663"
                    viewBox="0 0 14.0017 14.0017"
                    fill="none"
                    className="edit"
                    onClick={clickEditIcon}
                >
                    <defs />
                    <path
                        id="Vector"
                        d="M0.5 10.16L0.5 13.5L3.83 13.5L10.5 6.82L12.9 4.43L12.9 4.43C13.23 4.1 13.39 3.94 13.45 3.75C13.51 3.58 13.51 3.4 13.45 3.23C13.39 3.04 13.23 2.87 12.9 2.54L11.45 1.09C11.12 0.76 10.95 0.6 10.76 0.54C10.59 0.48 10.41 0.48 10.25 0.54C10.06 0.6 9.89 0.76 9.56 1.09L9.56 1.1L7.17 3.49L0.5 10.16ZM7.17 3.49L10.5 6.82"
                        stroke="#CDCDCD"
                        stroke-opacity="1.000000"
                        stroke-width="1.000000"
                        stroke-linejoin="round"
                    />
                </svg>
                <svg
                    width="18.000000"
                    height="18.000000"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="delete"
                    onClick={clickDeleteIcon}
                >
                    <defs>
                        <clipPath id="clip18_285">
                            <rect
                                id="trash-svgrepo-com 1"
                                rx="0.000000"
                                width="17.000000"
                                height="17.000000"
                                transform="translate(0.500000 0.500000)"
                                fill="#CDCDCD"
                                fill-opacity="0"
                            />
                        </clipPath>
                    </defs>
                    <rect
                        id="trash-svgrepo-com 1"
                        rx="0.000000"
                        width="17.000000"
                        height="17.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="#CDCDCD"
                        fill-opacity="0"
                    />
                    <g clip-path="url(#clip18_285)">
                        <path
                            id="Vector"
                            d="M5.36 6L12.63 6C13.5 6 14.19 6.74 14.12 7.61L13.6 14.36C13.54 15.14 12.89 15.75 12.11 15.75L5.88 15.75C5.1 15.75 4.45 15.14 4.39 14.36L3.87 7.61C3.8 6.74 4.49 6 5.36 6Z"
                            stroke="#CDCDCD"
                            stroke-opacity="1.000000"
                            stroke-width="1.000000"
                        />
                        <path
                            id="Vector"
                            d="M14.62 3.75L3.37 3.75"
                            stroke="#CDCDCD"
                            stroke-opacity="1.000000"
                            stroke-width="1.000000"
                            stroke-linecap="round"
                        />
                        <path
                            id="Vector"
                            d="M8.25 1.5L9.75 1.5C10.16 1.5 10.5 1.83 10.5 2.25L10.5 3.75L7.5 3.75L7.5 2.25C7.5 1.83 7.83 1.5 8.25 1.5Z"
                            stroke="#CDCDCD"
                            stroke-opacity="1.000000"
                            stroke-width="1.000000"
                        />
                        <path
                            id="Vector"
                            d="M10.5 9L10.5 12.75"
                            stroke="#CDCDCD"
                            stroke-opacity="1.000000"
                            stroke-width="1.000000"
                            stroke-linecap="round"
                        />
                        <path
                            id="Vector"
                            d="M7.5 9L7.5 12.75"
                            stroke="#CDCDCD"
                            stroke-opacity="1.000000"
                            stroke-width="1.000000"
                            stroke-linecap="round"
                        />
                    </g>
                </svg>
            </div>
        </div>
    )
}
