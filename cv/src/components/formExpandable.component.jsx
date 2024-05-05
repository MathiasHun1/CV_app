import { Fragment, useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import SchoolElement from './schoolElement'
import AddSchoolForm from './addNewSchoolForm'

export default function FormExpandabe({id, formName, educationData, onChangeEdu, onDeleteEdu, onAddEdu}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAddingSchool, setIsAddingSchool] = useState(false)

  function openSchoolsList() {
    if(isAddingSchool) return;
    setIsExpanded(!isExpanded)
  }

  function closeAdding() {
    setIsAddingSchool(false)
  }

  function addSchool() {
    setIsExpanded(false)
    setIsAddingSchool(true)
  }

  return (
    <div className='form-expandable'>
      <div className='form-expandable-header'>
        <h3>{formName}</h3>
        <span onClick={openSchoolsList} className="material-symbols-outlined expand-button">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      <div className={`form-expandable-content ${isExpanded ? 'expanded' : ''}`}>
        {id === 'edu' && educationData.map((school) => {
          return(
            <div key={uuidv4()}>
              <SchoolElement 
                schoolData={school} 
                onChangeEdu={onChangeEdu} 
                onDeleteEdu={onDeleteEdu}
              />
            </div>
            )}
        )}
        <div className="button-container">
          <button className='add-school-button' onClick={addSchool}>Hozzáad +</button>
        </div>
      </div>
      {isAddingSchool && (
      <div className='form-content'>
        <AddSchoolForm  onAddEdu={onAddEdu} closeAdding={closeAdding}/>
      </div>  
      )}
    </div>
  )
}