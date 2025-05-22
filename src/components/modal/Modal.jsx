import { useEffect } from 'react'
import './modal.css'

export const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) if (onClose) onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    const handleClose = () => {
        onClose()
    }

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal_background" onClick={onClose} />
            <div className="modal_container">
                <button className="close_button" onClick={() => handleClose()}>
                    X
                </button>
                {children}
            </div>
        </div>
    )
}
