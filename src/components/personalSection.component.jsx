import PersonForm from "./personForm.component"

export default function PersonalSection({data, onChange}) {

  return (
    <div className="person-form-container inputform-cont">
      <h3>Személyes adatok</h3>
      <PersonForm
        data={data}
        onChange={onChange}
      />
    </div>
  )
}
