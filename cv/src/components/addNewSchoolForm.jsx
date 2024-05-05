import { useState } from "react"
import { v4 as uuidv4} from 'uuid'


export default function AddSchoolForm({onAddEdu, closeAdding}) {
  const [school, setSchool] = useState({
    schoolName: '',
    degree: '',
    endTime: '',
    id: uuidv4()
  })

  function cancelAdding() {
    closeAdding()
  }

  function handleChange(e) {
    const newObj = {...school}
    const {id, value} = e.target
    newObj[id] = value
    console.log(newObj)
    setSchool(newObj)
  }

  function handleAddEdu() {
    const copied = {...school}
    onAddEdu(copied)
    closeAdding()
  }

  return (
    <div action="" className="school-form">
      <label htmlFor="school-name">Intézmény neve</label>
      <input type="text" id="schoolName"  onChange={handleChange}/>
      <label htmlFor="degree">Végzettség</label>
      <input type="text" id="degree"  onChange={handleChange}/>
      <label htmlFor="end-time">Végzés éve</label>
      <input type="text" id="endTime" onChange={handleChange}/>
      <div className="editbuttons-container">
        <button className="save-school-button" onClick={handleAddEdu}>
          <span class="material-symbols-outlined save-button">
          save_as
          </span>
        </button>
        <button className="delete_school-button delete-button" onClick={cancelAdding}>
          <span class="material-symbols-outlined">
          close
          </span>
        </button>
      </div>
    </div>
  )
}