import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BabyAdmissionsPage from './tests/Admission'
import EventsCalendar from './tests/Event'
import MediaGallery from './tests/Media'
import TeachersStaff from './tests/Staff'
import NewsBlogSection from './tests/NewsBlog'
import ContactPage from './tests/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <BabyAdmissionsPage/> */}
  {/* <EventsCalendar /> */}
  {/* <MediaGallery/> */}
  {/* <TeachersStaff/> */}
  {/* <NewsBlogSection/> */}
  <ContactPage/>
    </>
  )
}

export default App
