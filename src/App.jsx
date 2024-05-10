import { Fragment, useState } from 'react'
import './App.scss'
import exampleDatabase from './components/exampleDatabase'
import PersonalSection from './components/personalSection.component'
import ExpSection from './components/expSection.component'
import EduSection from './components/eduSection.component'
import CvOutput from './components/cvOutput.component'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const initialPersonalInfo = {
    name: '',
    email: '',
    phone: '',
    address: ''
  }

  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo)
  const [educationList, setEducationList] = useState([])
  const [experienceList, setExperienceList] = useState([])

  function handleClearAll() {
    setPersonalInfo(initialPersonalInfo)
    setEducationList([])
    setExperienceList([])
  }

  function loadExample() {
    const newPersonalInfo = {...exampleDatabase.personalInfo}
    setPersonalInfo(newPersonalInfo)
    const newEduData = JSON.parse(JSON.stringify(exampleDatabase.educationList))
    setEducationList(newEduData)
    const newExpData = JSON.parse(JSON.stringify(exampleDatabase.experienceList))
    setExperienceList(newExpData)
  }

  function handleChangePersonal(name, value) {
    const newPersonalInfo = JSON.parse(JSON.stringify(personalInfo))
    newPersonalInfo[name] = value
    setPersonalInfo(newPersonalInfo)
  }

  function hasFormOpen(list) {
    return list.some((element) => element.isOpened === true)
  } 

  function handleSaveEduForm(schoolName, degree, endTime, id) {
    const newEduList = JSON.parse(JSON.stringify(educationList))
    const openedElement = newEduList.find((school) => school.id === id)
    openedElement.schoolName = schoolName
    openedElement.degree = degree
    openedElement.endTime = endTime
    openedElement.isOpened = false
    setEducationList(newEduList)
  }

  function handleOpenEduForm(e) {
    const newEduList = JSON.parse(JSON.stringify(educationList))
    const clickedElement = newEduList.find((school) => school.id === e.target.dataset.id)
    clickedElement.isOpened = true
    setEducationList(newEduList)
  }

  function handleDelEduForm(e) {
    const newEduList = JSON.parse(JSON.stringify(educationList))
    setEducationList(newEduList.filter((school) => school.id !== e.target.parentElement.parentElement.dataset.id))
  }

  function handleAddEduForm(schoolName, degree, endTime) {
    const newEduList = JSON.parse(JSON.stringify(educationList))
    const newSchoolElement = {}
    newSchoolElement.schoolName = schoolName
    newSchoolElement.degree = degree
    newSchoolElement.endTime = endTime
    newSchoolElement.id = uuidv4()
    newSchoolElement.isOpened = false
    newEduList.push(newSchoolElement)
    setEducationList(newEduList)
  }


  function handleSaveExpForm(companyName, position, startDate, endDate, description, id) {
    const newExpList = JSON.parse(JSON.stringify(experienceList))
    const openedElement = newExpList.find((company) => company.id === id)
    openedElement.companyName = companyName
    openedElement.position = position
    openedElement.startDate = startDate
    openedElement.endDate = endDate
    openedElement.description = description
    openedElement.isOpened = false
    setExperienceList(newExpList)
  }

  function handleOpenExpForm(e) {
    const newExpList = JSON.parse(JSON.stringify(experienceList))
    const clickedElement = newExpList.find((company) => company.id === e.target.dataset.id)
    clickedElement.isOpened = true
    setExperienceList(newExpList)
  }

  function handleDelExpForm(e) {
    const newExpList = JSON.parse(JSON.stringify(experienceList))
    setExperienceList(newExpList.filter((company) => company.id !== e.target.parentElement.parentElement.dataset.id))
  }

  function handleAddExpForm(companyName, position, startDate, endDate, description) {
    const newExpList = JSON.parse(JSON.stringify(educationList))
    const newExpElement = {}
    newExpElement.companyName = companyName
    newExpElement.position = position
    newExpElement.startDate = startDate
    newExpElement.endDate = endDate
    newExpElement.description = description
    newExpElement.id = uuidv4()
    newExpElement.isOpened = false
    newExpList.push(newExpElement)
    setExperienceList(newExpList)
  }

  return (
    <Fragment>
      <section className='input-section'> 
        <div className='globalbutton-cont'>
          <button className='general-button globalbutton' onClick={loadExample}>Példa betöltés</button>
          <button className='general-button globalbutton' onClick={handleClearAll}>Minent töröl</button>
        </div>

        <PersonalSection
          data={personalInfo}
          onChange={handleChangePersonal}

        />
        <EduSection
          data={educationList}
          hasFormOpen={hasFormOpen(educationList)}
          onSaveEduForm={handleSaveEduForm}
          onOpenEduForm={handleOpenEduForm}
          onDelEduForm={handleDelEduForm}
          onAddEduForm={handleAddEduForm}
        />
        <ExpSection
          data={experienceList}
          hasFormOpen={hasFormOpen(experienceList)}
          onSaveExpForm={handleSaveExpForm}
          onOpenExpForm={handleOpenExpForm}
          onDelExpForm={handleDelExpForm}
          onAddExpForm={handleAddExpForm}
        />

      </section>
      <section className='output-section'>
        <CvOutput 
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
      </section>
    </Fragment>
  )
}

export default App
