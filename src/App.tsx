
import './App.css'
import styles from './components/ProfileCard/ProfileCard.module.css'
import Greeting from './components/Greeting/Greeting'
import ThankYou from './components/ThankYou/ThankYou'
import Goodbye from './components/Goodbye/Goodbye'
import Card from './components/Card/Card'
import ProfileCard from './components/ProfileCard/ProfileCard'
import { Counter } from './components/Card/Counter/Counter'
import PersonalGreeting from './components/PersonalGreeting/PersonalGreeting'
import WeightCalculator from './components/WeightCalculator/WeightCalculator'
import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm'

function App() {

const name = "Vitalii";
  return (
    <>
    <SpaceMissionForm />
      <Counter />
      <Counter />
      <WeightCalculator />
      <PersonalGreeting />
      <Greeting name={name} />
      <Greeting name={"Vasilii"} age={18} />
      <ThankYou />
      <Goodbye />
      <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdvW9f5xO_WrMcPqUUMCbo96aCyrY0clujA&s" alt="Example image" />
      <ProfileCard 
      className={styles.userCard}
      avatar="https://m.media-amazon.com/images/M/MV5BZjFmNjU0MGQtY2IyOS00YzQwLThiYmQtZjE2NzIyODhlZWMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      name="John Doe"
      description="Full-stack developer with 5 years of experience"
      />
    </>
  )
}

export default App