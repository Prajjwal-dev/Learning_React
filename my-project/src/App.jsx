import './App.css'
import Card from './Components/Card'


function App() {

  // let myObj = {
  //   username: "Prajjwal",
  //   age: 20
  // }

  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-100 text-black p-4 rounded-xl'>Hello Tailwind, css! I am Prajjwal</h1>
      <Card channel = "Prajjwal" someObj = {newArr}/>

      <Card username = "Prajjwal1"/>
    </>
  )
}

export default App
