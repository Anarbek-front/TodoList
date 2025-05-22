import './addbutton.css'

export const AddButton = ({ onClick }) => {
    return (
        <button className="add_todo" onClick={onClick}>
            <svg
                width="58.000000"
                height="58.000000"
                viewBox="0 0 58 58"
                fill="none"
            >
                <defs>
                    <filter
                        id="filter_17_246_dd"
                        x="0.000000"
                        y="0.000000"
                        width="58.000000"
                        height="58.000000"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="0" dy="0" />
                        <feGaussianBlur stdDeviation="1.33333" />
                        <feComposite
                            in2="hardAlpha"
                            operator="out"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.42353 0 0 0 0 0.38824 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect_dropShadow_1"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect_dropShadow_1"
                            result="shape"
                        />
                    </filter>
                </defs>
                <g filter="url(#filter_17_246_dd)">
                    <circle
                        id="Ellipse 3"
                        cx="29.000000"
                        cy="29.000000"
                        r="25.000000"
                        fill="#6C63FF"
                        fill-opacity="1.000000"
                    />
                </g>
                <path
                    id="Vector"
                    d="M27.5 39.5C27.5 39.89 27.65 40.27 27.93 40.56C28.22 40.84 28.6 41 29 41C29.39 41 29.77 40.84 30.06 40.56C30.34 40.27 30.5 39.89 30.5 39.5L30.5 30.5L39.5 30.5C39.89 30.5 40.27 30.34 40.56 30.06C40.84 29.77 41 29.39 41 29C41 28.6 40.84 28.22 40.56 27.93C40.27 27.65 39.89 27.5 39.5 27.5L30.5 27.5L30.5 18.5C30.5 18.1 30.34 17.72 30.06 17.43C29.77 17.15 29.39 17 29 17C28.6 17 28.22 17.15 27.93 17.43C27.65 17.72 27.5 18.1 27.5 18.5L27.5 27.5L18.5 27.5C18.1 27.5 17.72 27.65 17.43 27.93C17.15 28.22 17 28.6 17 29C17 29.39 17.15 29.77 17.43 30.06C17.72 30.34 18.1 30.5 18.5 30.5L27.5 30.5L27.5 39.5Z"
                    fill="#F7F7F7"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                />
            </svg>
        </button>
    )
}
