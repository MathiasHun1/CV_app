import { v4 as uuidv4 } from 'uuid'
import IMAGES from '../images/images'

export default function CvOutput({ personalInfo, educationList, experienceList }) {

  let profileImgUrl = IMAGES.image2

  return (
    <>
      <header className="cv-header">
        <h1>{personalInfo.name}</h1>
        <img src={profileImgUrl} alt="load image here" />
        <div className="ouput-info-cont">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.address}</p>
        </div>
      </header>
      <main className="cv-main">
        <section>
          {educationList.length > 0 && (
            <>
              <h2>Tanulmányok</h2>
              <hr />
            </>
          )}
          {educationList.map((school) => (
            <div key={uuidv4()} className="output-element-cont">
              <div>
                <h3 className="item-name">Iskola neve: </h3><p className="item-text">{school.schoolName}</p>
              </div>
              <div>
                <h3 className="item-name">Végzettség: </h3><p className="item-text">{school.degree}</p>
              </div>
              <div>
                <h3 className="item-name">Befejezés éve: </h3><p className="item-text">{school.endTime}</p>
              </div>
            </div>
          ))}

        </section>
        <section>
          {experienceList.length > 0 && (
            <>
              <h2>Tapasztalatok</h2>
              <hr />
            </>
          )}
          {experienceList.map((company) => (
            <div key={uuidv4()} className="output-element-cont">
              <div>
                <h3 className="item-name">Cég neve: </h3><p className="item-text">{company.companyName}</p>
              </div>
              <div>
                <h3 className="item-name">Pozíció: </h3><p className="item-text">{company.position}</p>
              </div>
              <div>
                <h3 className="item-name">Dátumtól: </h3><p className="item-text">{company.startDate}</p>
              </div>
              <div>
                <h3 className="item-name">Dátumig: </h3><p className="item-text">{company.endDate}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}