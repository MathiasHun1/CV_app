

export default function CvSchoolComponent({educationData}) {
const {schoolName, degree, endTime, id} = educationData

return (
  <div className="cv-school-element">
    <p><i>Végzettség:</i> {degree}</p>
    <p><i>Intézmény neve:</i> {schoolName}</p>
    <p><i>végzés éve: </i>{endTime}</p>
  </div>
)
}