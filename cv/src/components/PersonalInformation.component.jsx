
export default function PersonalInformation({handleChange, personalData}) {
  return (
    <div className='personal-info-form'>
            <h3>Személyes adatok</h3>
          <div >
            <label htmlFor="name">Név</label>
            <input type="text" id='name' onChange={handleChange} value={personalData.name}/>
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' onChange={handleChange} value={personalData.email}/>
            <label htmlFor="phone">Telefon</label>
            <input type="tel" id='phone' onChange={handleChange} value={personalData.phone}/>
            <label htmlFor="address">Lakcím</label>
            <input type="text" id='address' onChange={handleChange} value={personalData.address}/>
          </div>
    </div>
  )
}