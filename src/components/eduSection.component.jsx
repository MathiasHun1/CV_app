import EduForm from "./eduForm.component"
import { Fragment, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function EduSection({data, hasFormOpen, onSaveEduForm, onOpenEduForm, onDelEduForm, onAddEduForm}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isNotAddingNew, setIsNotAddingNew] = useState(true)

  const emptyFormData = {
    schoolName: '',
    degree: '',
    endTime: '',
    id: null
  }

  function toggleAddingState() {
    setIsNotAddingNew(!isNotAddingNew)
  }

  function handleExpand() {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="expandable-form edu inputform-cont">
      <div className="expand-header">
        <span></span>
        <h3>
          Taulmányok
        </h3>
          <span className="material-symbols-outlined" onClick={handleExpand}>
            {isExpanded ? 'expand_more' : 'expand_less'}
          </span>
      </div>
      
      <div className={`expand-main ${isExpanded ? 'expanded' : ''}`}>
        {!hasFormOpen && isNotAddingNew && (
          data.map((school) => (
            <button 
              key={school.id} 
              onClick={onOpenEduForm} 
              data-id={school.id} 
              className="formname-button">
              {school.schoolName}
            </button>
          ))
        )}
        {hasFormOpen && isNotAddingNew && (
          <Fragment>
            {data.map((school) => {
              if (school.isOpened) {
                return (
                  <>
                    <EduForm
                      key={school.id}
                      data={school}
                      onSaveEduForm={onSaveEduForm}
                      onDelEduForm={onDelEduForm}
                    />
                  </>
                )
              }
            })}
          </Fragment>
        )}
        {!isNotAddingNew && (
          <>
            <EduForm
              data={emptyFormData}
              onAddEduForm={onAddEduForm}
              onToggleState={toggleAddingState}
            />
          </>
        )}

        {hasFormOpen || isNotAddingNew && (

        <button className="add-new-button general-button" onClick={()=> setIsNotAddingNew(false) }>Hozzáadás</button>
        )}
      </div>

    </div>
  )
}