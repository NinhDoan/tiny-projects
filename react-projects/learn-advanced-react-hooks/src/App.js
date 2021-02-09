import React, { useState } from 'react'
// import {data} from '../src/data'
import './App.css'

// function App() {
//   const [text, setText] = useState('Random Title')
//   const handleClick = () => {
//     if (text === 'Random Title') {
//       setText('Hello World')
//     }
//     if (text === 'Hello World') {
//       setText('Random Title')
//     }
//   }
//   return (
//     <div className='App'>
//       <h1>{text}</h1>
//       <button type='button' onClick={handleClick}>
//         Change Title
//       </button>
//     </div>
//   )
// }

// function App() {
//   const [people, setPeople] = useState(data)

//   const removeItem = (id) =>
//   {
//     let newPeople = people.filter((person) => person.id !== id)
//     setPeople(newPeople)
//   }

//   return (
//     <>
//       {people.map((people) =>
//       {
//         const { id, name } = people
//         return (
//           <div key={id} className="item">
//             <h4>{name}</h4>
//             <button type="button" onClick={() => removeItem(id)}>remove</button>
//           </div>
//         )
//       })}
//       <button type="button" onClick={() => setPeople([])}>Clear Items</button>
//     </>
//   )
// }

// function App()
// {
//   const [person, setPerson] = useState({
//     name: 'Perter',
//     age: 24,
//     message: 'random message'
//   })
//   const changeMessage = () =>
//   {
//     if (person.message === 'random message') {
//       setPerson({ ...person, message: 'hello world' })
//     }
//     if (person.message === 'hello world') {
//       setPerson({...person, message: 'random message'})
//     }
    
//   }

//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h3>{person.message}</h3>
      
//       <button onClick={changeMessage}>Change Message</button>
//     </>
//   )
// }

function App()
{
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1)
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setValue(0)
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          if (value === 0) {
            setValue(0)
          }

          if (value !== 0) {
            setValue(value - 1)
          }
        }}
      >
        Decrease
      </button>
    </>
  )
 }

export default App
