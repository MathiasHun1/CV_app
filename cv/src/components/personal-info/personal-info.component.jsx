import './personal-info.scss'
import InputField from '../input-field/inputField.component'
import EditingButtons from '../editButtons/save.component'

const PersonalInfo = ({name, email, phone, address, onChange}) => {
  return (
      <div className='personal-info-container'>
        <div className="input-field">
          <label htmlFor="name">Név</label>
          <input type="text" name="name" id="name" value={name} onChange={onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="phone">Telefon</label>
          <input type="tel" name="phone" id="phone" value={phone} onChange={onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="address">Címe</label>
          <input type="text" name="address" id="address" value={address} onChange={onChange}/>
        </div>
      </div>
  )
}

export default PersonalInfo