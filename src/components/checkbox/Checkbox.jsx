import './checkbox.css'

export const Checkbox = ({ checked, onChange, label, id, name }) => {
    return (
        <label className="custom_checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                id={id}
            />
            <span className="checkmark" />
            {label && <span className="label_text"></span>}
        </label>
    )
}
