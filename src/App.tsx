import { useSelector } from 'react-redux'
import './App.css'
import { IFruitsStore } from './store/fruits/fruits.types'
import { selectFruits } from './store/fruits/fruits.selectors'
import { useEffect } from 'react'
import { setFruitsEpic } from './store/fruits/fruits.epic'
import { useAppDispatch } from './hooks/useAppDispatch'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => 
    dispatch(setFruitsEpic())
  )

  const fruits = useSelector((store: IFruitsStore) => selectFruits(store))

  return (
    <>
      {fruits.length && fruits.map((fruit) => {
        <div>{fruit.name}</div>
      })}
    </>
  )
}

export default App
