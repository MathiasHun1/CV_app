import './App.scss'
import { Fragment } from 'react'
import PersonalInfo from './components/personal-info/personal-info.component'
import Education from './components/education/education.component'
import Experience from './components/experience/experience.component'


const PersonData = () => {
  return(
    <div className='person-data-container'>
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  )
}

const Cv = () => {
  return (
    <div className='cv-container'>
      <div className='cv-header'></div>
      <div className='cv-body'></div>
    </div>
  )
}

export default function App() {
  return (
    <Fragment>
      <PersonData />
      <Cv />
    </Fragment>
  )
}


