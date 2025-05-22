import { useEffect, useRef, useState } from 'react'
import './select.css'

const Select = ({ options, onSelect, selectedValue }) => {
    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef(null)
    const selectedOptionRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target))
                setIsOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const handleOptionSelect = (value) => {
        onSelect(value)
        setIsOpen(false)
    }
    return (
        <div className="select_container" ref={selectRef}>
            <div
                className={`select_header ${isOpen ? 'focus' : ''}`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span ref={selectedOptionRef}>{selectedValue}</span>
                <svg
                    className={`select_arrow ${isOpen ? 'open' : ''}`}
                    width="7.742554"
                    height="4.004059"
                    viewBox="0 0 7.74255 4.00406"
                    fill="none"
                >
                    <defs />
                    <path
                        id="Vector"
                        d="M3.87 3.5L0.5 0.5"
                        stroke="#F7F7F7"
                        stroke-opacity="1.000000"
                        stroke-width="1.000000"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    />
                    <path
                        id="Vector"
                        d="M7.24 0.5L3.87 3.5"
                        stroke="#F7F7F7"
                        stroke-opacity="1.000000"
                        stroke-width="1.000000"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="select_options">
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            className="select_option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select
