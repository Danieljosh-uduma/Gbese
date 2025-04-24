import './App.css'

function App() {
    const API_KEY = import.meta.env.VITE_API_KEY
  return (
    <>
      <div className="App">
        <h1>Gbese Bank Account {API_KEY}</h1>
      </div>  
    </>

  )
}

export default App
