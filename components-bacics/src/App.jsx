import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Timer from './components/Timer'
import Counter from './components/Counter'

const movies=[
  {
    title: 'The Matrix',
    description: 'Description here'
  }, 
  {
    title: 'The Matrix',
    description: 'Description here'
  }, 
  {
    title: 'The Matrix',
    description: 'Description here'
  }, 

]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My React first Application</h1>
      <Counter></Counter>
      <Timer startTime={5}></Timer>
      <Timer startTime={6}></Timer>
      <MovieList movies={movies} headingText="MovieList"/>
    </div>
  )
}

export default App
