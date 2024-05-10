

export default function PersonForm({ data, onChange }) {

  const { name, email, phone, address } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    onChange(name, value)
  }

  return (
    <div className="personal-form inputform">
      <label>
        <p>Név</p>
        <input type="text" name="name" onChange={handleChange} value={name}/>
      </label>
      <label>
        <p>Email</p>
        <input type="text" name='email' onChange={handleChange} value={email}/>
      </label>
      <label>
        <p>Telefon</p>
        <input type="text" name="phone" onChange={handleChange} value={phone}/>
      </label>
      <label>
        <p>Lakcím</p>
        <input type="text" name="address" onChange={handleChange} value={address}/>
      </label>
    </div>
  )
}

