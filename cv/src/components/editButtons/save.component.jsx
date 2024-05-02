import './save.scss'

const EditingButtons = ({data}) => {
  console.log(data)
  return (
    <div className="editbuttons-container">
      <button>Mentés</button>
      <button>Szerk.</button>
      <button>Mégse</button>
    </div>
  )
}

export default EditingButtons