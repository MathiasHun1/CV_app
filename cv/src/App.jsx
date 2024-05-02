import { useState, Fragment, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.scss'
import FormExpandabe from './components/formExpandable.component'
import database from './components/database'
import exampleDatabase from './components/exampleDatabase'
import ExpandableElement from './components/expandable-element.component'

function App() {
  const [personalData, setPersonalData] = useState(database.personalInfo)
  const [educationData, setEducationData] = useState(database.educationList)

  function loadExampleData() {
    setPersonalData(exampleDatabase.personalInfo)
    setEducationData(exampleDatabase.educationList)
  }

  function handleChange(e) {
    const newPersonalData = JSON.parse(JSON.stringify(personalData))
    newPersonalData[e.target.id] = e.target.value
    setPersonalData(newPersonalData)
  }

  function clearData() {
    const newPersonalData = JSON.parse(JSON.stringify(database.personalInfo))
    setPersonalData(newPersonalData)
    const newEducationData = JSON.parse(JSON.stringify(database.educationList))
    setEducationData(newEducationData)
  }

  let x = 35
  return (
    <Fragment>
      <section className="form-section">
        <div className='personal-info-form'>
          <form action="">
            <label htmlFor="name">Név</label>
            <input type="text" id='name' onChange={handleChange} value={personalData.name}/>
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' onChange={handleChange} value={personalData.email}/>
            <label htmlFor="phone">Telefon</label>
            <input type="tel" id='phone' onChange={handleChange} value={personalData.phone}/>
            <label htmlFor="address">Lakcím</label>
            <input type="text" id='address' onChange={handleChange} value={personalData.address}/>
          </form>
        </div>
        <FormExpandabe
          id='edu' 
          formName={'Tanulmányok'}
          educationData={educationData}
          x={x}
        />
        <FormExpandabe id='exp' formName={'Tapasztalat'}/>
        <button onClick={loadExampleData}>Példát betölt</button>
        <button onClick={clearData}>Törlés</button>
      </section>

      <section className="cv-section">
      </section>
    </Fragment>
  )
}

export default App
