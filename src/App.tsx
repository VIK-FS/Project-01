
import './App.css'
import Greeting from './components/Greeting/Greeting'
import ThankYou from './components/ThankYou/ThankYou'
import Card from './components/Card/Card'

function App() {

const name = "Vitalii";
  return (
    <>
      <Greeting name={name} />
      <Greeting name={"Vasilii"} age={18} />
      <ThankYou />
      <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdvW9f5xO_WrMcPqUUMCbo96aCyrY0clujA&s" alt="Example image" 
      />

    </>
  
  )
}

export default App
