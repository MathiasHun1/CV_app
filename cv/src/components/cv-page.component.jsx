import { Fragment, useState } from "react"
import CvSchoolComponent from './cv-schoolComponent'
import { v4 as uuidv4 } from 'uuid'

export default function CvPage({personalData, educationData, experienceData}) {
  const {name, email, phone, address} = personalData
  return (
    <Fragment>
      <header className="cv-header">
        <h1>{name}</h1>
        <div className="conact-info-container">
          <p>{phone}</p>
          <p>{email}</p>
          <p>{address}</p>
        </div>
      </header>
      <main className="cv-body">
        {Object.keys(educationData).length > 0 && (
          <section className='cv-edu-section'>
            <h3 className="eudcation-list-title">Képzettségek</h3>
            {educationData.map((school) => (
              <Fragment key={uuidv4()}>
                <CvSchoolComponent educationData={school}/>
              </Fragment>
            )
            )}
          </section>
        )}
        <section>

        </section>
      </main>
    </Fragment>
  )
}