import './inputField.scss'

const InputField = (props) => {
  const {name, inputId, inputText, inputType, onChange} = props
  return (
    <div className="input-field-component">
      <label htmlFor={inputId} >{inputText}</label>
      <input type={inputType} name={inputType} id={inputId} onChange={onChange} value={name}/>
    </div>
  )
}

export default InputField