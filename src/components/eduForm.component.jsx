import { useState } from "react"

export default function EduForm({data, onAddEduForm, onSaveEduForm, onDelEduForm, onToggleState}) {
  const [schoolName, setSchoolName] = useState(data.schoolName)
  const [degree, setDegree] = useState(data.degree)
  const [endTime, setEndTime] = useState(data.endTime)

  function handleAdd() {
    onAddEduForm(schoolName, degree, endTime)
    onToggleState()
  }

  function handleSave() {
    onSaveEduForm(schoolName, degree, endTime, data.id)
  }

  function handleDelete(e) {
    data.id !== null ? onDelEduForm(e) : onToggleState()
  }

  function handleAction() {
    if (data.id !== null) {
      handleSave()
    } else {
      handleAdd()
    }
  }

  return (
    <div data-id={data.id} className="inputform">
      <label>
        <p>Cég neve</p>
        <input 
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        />
      </label>
      <label>
        <p>Végzettség</p>
        <input 
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        />
      </label>
      <label>
        <p>Végzés éve</p>
        <input 
        type="text"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        />
      </label>
      <div className="inputform-buttons-cont">
        <button onClick={handleDelete}>
        <span className="material-symbols-outlined">{`${data.id === null ? 'close' : 'delete'}`}</span>
        {data.id === null ? 'Mégse' : 'Törlés'}
        </button>
        <button onClick={handleAction}><span className="material-symbols-outlined">save</span>
        Mentés
        </button>
      </div>
    </div>
  )
}
