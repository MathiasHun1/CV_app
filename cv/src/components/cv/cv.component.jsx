import './cv.scss'

const Cv = ({data}) => {
  const {name, email, phone, address} = data
  return (
    <div className='cv-container'>
      <div className='cv-header'>
        <h1 className='person-name'>{name}</h1>
        <p className='person-email'>{email}</p>
        <p className='person-phone'>{phone}</p>
        <p className='person-address'>{address}</p>
      </div>
      <div className='cv-body'>
      </div>
    </div>
  )
}

export default Cv