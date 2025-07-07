
import './App.css'
import Greeting from './components/Greeting/Greeting'
import ThankYou from './components/ThankYou/ThankYou'
import Goodbye from './components/Goodbye/Goodbye'
import Card from './components/Card/Card'
import ProfileCard from './components/ProfileCard/ProfileCard'


function App() {

const name = "Vitalii";
  return (
    <>
      <Greeting name={name} />
      <Greeting name={"Vasilii"} age={18} />
      <ThankYou />
      <Goodbye />
      <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdvW9f5xO_WrMcPqUUMCbo96aCyrY0clujA&s" alt="Example image" />
      <ProfileCard 
      width="240px"
      avatar="https://m.media-amazon.com/images/M/MV5BZjFmNjU0MGQtY2IyOS00YzQwLThiYmQtZjE2NzIyODhlZWMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      name="John Doe"
      description="Full-stack developer with 5 years of experience"
      />
    </>
  )
}

export default App
