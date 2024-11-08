import Card from './Card.jsx'

function App() {
  const myArr = [1,3,4,5];
  return (
   <>
      <h1 className="bg-green-600 p-6 text-center text-white rounded-xl text-3xl mb-4">This is TailwindCSS Project</h1>
      <Card series="MokamboShooter" subscribe="Click Now"/>
      <Card arr={myArr}/>
   </>
  )
}

export default App
