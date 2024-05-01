import './personal-info.scss'
import InputField from '../input-field/inputField.component'
import { Fragment } from 'react'
import EditingButtons from '../editButtons/save.component'

const PersonalInfo = () => {
  return (
  
      <div className='personal-info-container'>
        <InputField inputType={'text'} inputText={'Név'} inputId={'name'} />
        <InputField inputType={'email'} inputText={'E-mail'} inputId={'email'} />
        <InputField inputType={'number'} inputText={'Telefon'} inputId={'phone'} />
        <InputField inputType={'text'} inputText={'Cím'} inputId={'address'} />
        <EditingButtons/>
      </div>
  )
}

export default PersonalInfo