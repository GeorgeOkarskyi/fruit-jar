import './App.css'
import { useEffect } from 'react'
import { setFruitsEpic } from './store/fruits/fruits.epic'
import { useAppDispatch } from './hooks/useAppDispatch'
import { FruitsList } from './components/fruits-list/fruits-list'
import { LoadingPage } from './components/loading-page/loading-page'
import { useSelector } from 'react-redux'
import { selectLoading } from './store/ui/ui.selectors'
import { RootState } from './store'

function App() {
  const dispatch = useAppDispatch();

  const loading = useSelector((store: RootState) => selectLoading(store))

  useEffect(() => {
    dispatch(setFruitsEpic())
  }, [dispatch]);

  return (
    <>    
      {loading ? <LoadingPage/> : <FruitsList/>}
    </>

  )
}

export default App
