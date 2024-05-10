import ExpForm from "./expForm.component"
import { Fragment, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ExpSection({data, hasFormOpen, onSaveExpForm, onOpenExpForm, onDelExpForm, onAddExpForm}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isNotAddingNew, setIsNotAddingNew] = useState(true)

  const emptyFormData = {
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    id: null
  }

  function toggleAddingState() {
    setIsNotAddingNew(!isNotAddingNew)
  }

  function handleExpand() {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <div className="expandable-form exp inputform-cont">
      <div className="expand-header">
        <span></span>
        <h3>
          Tapasztalatok
        </h3>
          <span className="material-symbols-outlined" onClick={handleExpand}>
            {isExpanded ? 'expand_more' : 'expand_less'}
          </span>
      </div>

      <div className={`expand-main ${isExpanded ? 'expanded' : ''}`}>
        {!hasFormOpen && isNotAddingNew && (
          data.map((company) => (
            <button 
              key={company.id} 
              onClick={onOpenExpForm} 
              data-id={company.id} 
              className="formname-button">
                {company.companyName}
            </button>
          ))
        )}
        {hasFormOpen && isNotAddingNew && (
          <Fragment>
            {data.map((company) => {
              if (company.isOpened) {
                return (
                  <>
                    <ExpForm
                    key={company.id}
                    data={company}
                    onSaveExpForm={onSaveExpForm}
                    onDelExpForm={onDelExpForm}
                    />
                  </>
                )
              }
            })}
          </Fragment>
        )}
        {!isNotAddingNew && (
          <>
            <ExpForm
              data={emptyFormData}
              onAddExpForm={onAddExpForm}
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