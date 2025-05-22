import { useEffect, useState } from 'react'
import './theme.css'

const THEME = 'theme'

export const Theme = () => {
    const [themeMode, setThemeMode] = useState('light')

    const setDarkTheme = () => {
        document.querySelector('body').setAttribute('theme', 'dark')
        setThemeMode('dark')
        localStorage.setItem(THEME, 'dark')
    }

    const setLightTheme = () => {
        document.querySelector('body').setAttribute('theme', 'light')
        setThemeMode('light')
        localStorage.setItem(THEME, 'light')
    }

    const toggleTheme = (e) => {
        e.target.checked ? setDarkTheme() : setLightTheme()
    }

    useEffect(() => {
        const theme = localStorage.getItem(THEME)
        theme === 'dark' ? setDarkTheme() : theme === 'light' && setLightTheme()
    }, [])

    return (
        <div className="icon_mode_container">
            <input
                type="checkbox"
                className="theme_input"
                id="themeToggle"
                onChange={toggleTheme}
            />
            <label htmlFor="themeToggle">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 38 38"
                    fill="none"
                    cursor={'pointer'}
                    onClick={toggleTheme}
                >
                    <defs />
                    <rect
                        id="Rectangle 11"
                        rx="5.000000"
                        width="38.000000"
                        height="38.000000"
                        fill="#6C63FF"
                        fill-opacity="1.000000"
                    />
                    {themeMode === 'light' && (
                        <path
                            id="Vector"
                            d="M19.12 8.54C19.33 8.91 19.32 9.37 19.07 9.72C18.34 10.79 17.91 12.08 17.91 13.47C17.91 17.12 20.87 20.08 24.52 20.08C25.91 20.08 27.2 19.65 28.27 18.92C28.62 18.67 29.08 18.66 29.45 18.87C29.81 19.08 30.03 19.49 29.99 19.92C29.51 25.56 24.78 30 19.01 30C12.93 30 8 25.06 8 18.98C8 13.21 12.43 8.48 18.07 8C18.5 7.96 18.91 8.18 19.12 8.54ZM16.17 10.63C12.7 11.81 10.2 15.1 10.2 18.98C10.2 23.85 14.14 27.79 19.01 27.79C22.89 27.79 26.18 25.29 27.36 21.82C26.47 22.12 25.51 22.28 24.52 22.28C19.65 22.28 15.71 18.34 15.71 13.47C15.71 12.48 15.87 11.52 16.17 10.63Z"
                            fill="#F7F7F7"
                            fill-opacity="1.000000"
                            fill-rule="evenodd"
                        />
                    )}
                    {themeMode === 'dark' && (
                        <path
                            id="Vector"
                            d="M20.15 9.15C20.15 8.51 19.63 8 19 8C18.36 8 17.84 8.51 17.84 9.15L17.84 9.73C17.84 10.37 18.36 10.89 19 10.89C19.63 10.89 20.15 10.37 20.15 9.73L20.15 9.15ZM26.77 12.85C27.23 12.4 27.23 11.67 26.77 11.22C26.32 10.76 25.59 10.76 25.14 11.22L24.73 11.63C24.27 12.08 24.27 12.81 24.73 13.27C25.18 13.72 25.91 13.72 26.36 13.27L26.77 12.85ZM12.85 11.22C12.4 10.76 11.67 10.76 11.22 11.22C10.76 11.67 10.76 12.4 11.22 12.85L11.63 13.27C12.08 13.72 12.81 13.72 13.26 13.27C13.72 12.81 13.72 12.08 13.26 11.63L12.85 11.22ZM9.15 17.84C8.51 17.84 8 18.36 8 19C8 19.63 8.51 20.15 9.15 20.15L9.73 20.15C10.37 20.15 10.89 19.63 10.89 19C10.89 18.36 10.37 17.84 9.73 17.84L9.15 17.84ZM28.26 17.84C27.62 17.84 27.1 18.36 27.1 19C27.1 19.63 27.62 20.15 28.26 20.15L28.84 20.15C29.48 20.15 30 19.63 30 19C30 18.36 29.48 17.84 28.84 17.84L28.26 17.84ZM13.26 26.36C13.72 25.91 13.72 25.18 13.26 24.73C12.81 24.27 12.08 24.27 11.63 24.73L11.22 25.14C10.76 25.59 10.76 26.32 11.22 26.77C11.67 27.23 12.4 27.23 12.85 26.77L13.26 26.36ZM26.36 24.73C25.91 24.27 25.18 24.27 24.73 24.73C24.27 25.18 24.27 25.91 24.73 26.36L25.14 26.77C25.59 27.23 26.32 27.23 26.77 26.77C27.23 26.32 27.23 25.59 26.77 25.14L26.36 24.73ZM20.15 28.26C20.15 27.62 19.63 27.1 19 27.1C18.36 27.1 17.84 27.62 17.84 28.26L17.84 28.84C17.84 29.48 18.36 30 19 30C19.63 30 20.15 29.48 20.15 28.84L20.15 28.26ZM14.36 19C14.36 16.44 16.44 14.36 19 14.36C21.55 14.36 23.63 16.44 23.63 19C23.63 21.55 21.55 23.63 19 23.63C16.44 23.63 14.36 21.55 14.36 19ZM19 12.05C15.16 12.05 12.05 15.16 12.05 19C12.05 22.83 15.16 25.94 19 25.94C22.83 25.94 25.94 22.83 25.94 19C25.94 15.16 22.83 12.05 19 12.05Z"
                            fill="#F7F7F7"
                            fill-opacity="1.000000"
                            fill-rule="evenodd"
                        />
                    )}
                </svg>
            </label>
        </div>
    )
}
