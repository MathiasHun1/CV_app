import { useState, Fragment } from 'react'
import './App.scss'
import FormExpandabe from './components/formExpandable.component'
import database from './components/database'
import exampleDatabase from './components/exampleDatabase'
import PersonalInformation from './components/PersonalInformation.component'
import CvPage from './components/cv-page.component'

function App() {
  const [personalData, setPersonalData] = useState(database.personalInfo)
  const [educationData, setEducationData] = useState(database.educationList)
  const [experienceData, setExperienceData] = useState(database.experienceList)

  function loadExampleData() {
    setPersonalData(exampleDatabase.personalInfo)
    setEducationData(exampleDatabase.educationList)
    setExperienceData(exampleDatabase.experienceList)
    console.log(experienceData)
  }
 
  function clearData() {
    const newPersonalData = JSON.parse(JSON.stringify(database.personalInfo))
    setPersonalData(newPersonalData)
    const newEducationData = JSON.parse(JSON.stringify(database.educationList))
    setEducationData(newEducationData)
    const newExperienceData = JSON.parse(JSON.stringify(database.experienceList))
    setExperienceData(newExperienceData)
  }
  function handleChange(e) {
    const newPersonalData = JSON.parse(JSON.stringify(personalData))
    newPersonalData[e.target.id] = e.target.value
    setPersonalData(newPersonalData)
  }
  
  //functions to modify education data
  function handleChangeEdu(modifiedSchool) {
    const array = []
    educationData.map((school) => {
      if(school.id === modifiedSchool.id) {
        array.push(modifiedSchool)
      } else {
        array.push(school)
      }
    })
    setEducationData(array)
  }

  function handleDeleteEdu(deletedSchool) {
    const array = []
    educationData.map((school) => {
      if(school.id !== deletedSchool.id) {
        array.push(school)
      } 
    })
    setEducationData(array)
  }

  function handleAddEdu(newSchool) {
    const array = educationData.map((school) => ({...school}))
    array.push(newSchool)
    setEducationData(array)
  }


  return (
    <Fragment>
      <section className="form-section page">
        <PersonalInformation
          personalData={personalData}
          handleChange={handleChange}
        />
        <FormExpandabe
          id='edu' 
          formName={'Tanulmányok'}
          educationData={educationData}
          onChangeEdu={handleChangeEdu}
          onDeleteEdu={handleDeleteEdu}
          onAddEdu={handleAddEdu}
        />
        <div className='global-editing-buttons'>
          <button className='global-load-button' onClick={loadExampleData}>Példa betöltés</button>
          <button className='global-delete-button' onClick={clearData}>Adatok törlése</button>
        </div>
      </section>
      <section className="cv-section page">
        <CvPage personalData={personalData} educationData={educationData}/>
      </section>
    </Fragment>
  )
}

export default App
