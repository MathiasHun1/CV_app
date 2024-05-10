import { useState } from "react"

export default function ExpForm({data, onAddExpForm, onSaveExpForm, onDelExpForm, onToggleState}) {
  const [companyName, setCompanyName] = useState(data.companyName)
  const [position, setPosition] = useState(data.position)
  const [startDate, setStartDate] = useState(data.startDate)
  const [endDate, setEndDate] = useState(data.endDate)
  const [description, setDescription] = useState(data.description)

  function handleAdd() {
    onAddExpForm(companyName, position, startDate, endDate, description)
    onToggleState()
  }

  function handleSave() {
    onSaveExpForm(companyName, position, startDate, endDate, description, data.id)
  }

  function handleDelete(e) {
    data.id !== null ? onDelExpForm(e) : onToggleState()
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
        <p>Intézmény neve</p>
        <input 
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        <p>Pozíció</p>
        <input 
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
        <p>Ettől</p>
        <input 
        type="text"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        <p>Eddig</p>
        <input 
        type="text"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        <p>Munka leírása</p>
        <input 
        type="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
