import '../styles/form-expandable.scss'
import { useState } from 'react'
import ExpandableElement from './expandable-element.component'
import { v4 as uuidv4} from 'uuid'

export default function FormExpandabe({id, formName, openExpandable, educationData, x}) {
  const [isExpanded, setIsExpanded] = useState(false)
  console.log(id)
  return (
    <div className='form-expandable'>
      <div className='form-expandable-header'>
        <h3>{formName}</h3>
        <span onClick={openExpandable} className="material-symbols-outlined">

        </span>
      </div>
      <div className="form-expandable-content">
        {id === 'edu' && educationData.map((school) => {
          return(
            <div key={uuidv4()}>
              <p>{school.schoolName}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}