import './App.scss'
import { Fragment, useState } from 'react'
import PersonalInfo from './components/personal-info/personal-info.component'
import Education from './components/education/education.component'
import Experience from './components/experience/experience.component'
import Cv from './components/cv/cv.component'
import _, { add } from 'lodash'

const dataBase = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    address: ''
  },
}


const PersonData = ({name, email, phone, address, onChange, onClearForm, onLoadExample}) => {

  return(
    <div className='person-data-container'>
      <PersonalInfo 
        name={name}
        email={email}
        phone={phone}
        address={address}
        onChange={onChange}
         />
      <Education />
      <Experience />
      <button className='clear-button' onClick={onClearForm}>Törlés</button>
      <button className='load-example-button' onClick={onLoadExample}>Példa betöltés</button>
    </div>
  )
}



export default function App() {
  const [personalData, setPersonalData] = useState(dataBase.personalInfo)
  
  function handlePersonalDataChange(e) {
    const newPersonalData = {...personalData, [e.target.id]: e.target.value}
    setPersonalData(newPersonalData)
  }

  function loadExample() {
    const exampleData = {
        name: 'Kovács Lajos',
        email: 'lalivagyok@freemail.hu',
        phone: '+36304445269',
        address: '1212 Budapest, Tapló utca 5'
      }
      console.log(exampleData)
      setPersonalData(exampleData)
  }

  function handleClearForm() {
    const newPersonalData = {...personalData, name: '', email: '', phone: '', address: ''}
    console.log(newPersonalData)
    setPersonalData(newPersonalData)
  }

  return (
    <Fragment >
      <PersonData
        name={personalData.name}
        email={personalData.email}
        phone={personalData.phone}
        address={personalData.address}
        onChange={handlePersonalDataChange}
        onClearForm={handleClearForm}
        onLoadExample={loadExample}
      />
      <Cv data={personalData} />
    </Fragment>
  )
}




