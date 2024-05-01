import './inputField.scss'

const InputField = ({inputId, inputText, inputType}) => {
  return (
    <div className="input-field-component">
      <label htmlFor={inputId}>{inputText}</label>
      <input type={inputType} id={inputId}/>
    </div>
  )
}

export default InputField