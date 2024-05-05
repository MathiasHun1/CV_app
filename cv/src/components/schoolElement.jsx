import { useState, Fragment } from "react";
import { v4 as uuidv4} from 'uuid'

export default function SchoolElement({schoolData, onChangeEdu, onDeleteEdu}) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState(schoolData || {
    schoolName: '',
    degree: '',
    endTime: '',
    id: uuidv4()
  })

  const { schoolName, degree, endTime, id } = formData;

  function handleChange(e) {
    const newData = {...formData}
    const { id, value } = e.target;
    newData[id] = value
    setFormData(newData)
  }

  function changeSchoolData() {
    onChangeEdu(formData)
  } 

  function deleteSchool() {
    onDeleteEdu(formData)
  }

  function handleClick(e) {
    setIsOpen(!isOpen)
  }
  return (
    <Fragment>
      <div >
          <span className="material-symbols-outlined school-icon">
            school
          </span>
        <p onClick={handleClick} className={`school-header ${isOpen? 'open' : ''}`}>
          {schoolName}
          <span className="material-symbols-outlined edit-icon edit-icon">edit</span>
        </p>
      </div>
      {isOpen && (
        <div action="" className="school-form">
          <label htmlFor="school-name">Intézmény neve</label>
          <input type="text" id="schoolName" defaultValue={schoolName} onChange={handleChange}/>
          <label htmlFor="degree">Végzettség</label>
          <input type="text" id="degree" defaultValue={degree} onChange={handleChange}/>
          <label htmlFor="end-time">Végzés éve</label>
          <input type="text" id="endTime" defaultValue={endTime} onChange={handleChange}/>
          <div className="editbuttons-container">
            <button className="save-school-button" onClick={changeSchoolData}>
              <span class="material-symbols-outlined save-button">
              save_as
              </span>
            </button>
            <button className="delete_school-button delete-button" onClick={deleteSchool}>
              <span className="material-symbols-outlined">
              delete
              </span>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  )
}
