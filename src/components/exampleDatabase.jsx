import { v4 as uuidv4 } from 'uuid'

const exampleDatabase = {
  personalInfo: {
    name: 'Kovács Lajos',
    email: 'lallerlaller@freemail.hu',
    phone: '+36307328876',
    address: '1212 Budapest, János u. 6'
  },

  educationList: [
    {
      schoolName: 'Szent István Egyetem',
      degree: 'Közgazdász',
      endTime: '2013',
      id: uuidv4(),
      isOpened: false
    },
  ],
  experienceList: [
    {
      companyName: 'Kovács és Társa ZRT',
      position: 'Kockázat-elemező',
      startDate: '1999.11.01',
      endDate: '2020.02.12',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae incidunt est, a dicta nobis exercitationem minima odio dolor ipsum veritatis eaque inventore iste temporibus accusantium quo ipsa nisi blanditiis.',
      id: uuidv4(),
      isOpened: false
    },
    {
      companyName: 'Kovács és Társa ZRT',
      position: 'Igazgató helyettes',
      startDate: '1999.11.01',
      endDate: '2020.02.12',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae incidunt est, a dicta nobis exercitationem minima odio dolor ipsum veritatis eaque inventore iste temporibus accusantium quo ipsa nisi blanditiis.',
      id: uuidv4(),
      isOpened: false
    }
  ]
}

export default exampleDatabase