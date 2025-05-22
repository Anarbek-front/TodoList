import './button.css'

export const Button = ({ content = 'button', onClick, className }) => {
    return (
        <button onClick={onClick} className={`reusable_button ${className}`}>
            {content}
        </button>
    )
}
