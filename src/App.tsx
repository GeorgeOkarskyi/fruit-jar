import { useEffect } from 'react'
import { setFruitsEpic } from './store/fruits/fruits.epic'
import { useAppDispatch } from './hooks/useAppDispatch'
import { LoadingPage } from './components/loading-page/loading-page'
import { useSelector } from 'react-redux'
import { selectLoading } from './store/ui/ui.selectors'
import { RootState } from './store'
import { Layout } from './layouts/layout'

function App() {
  const dispatch = useAppDispatch();

  const loading = useSelector((store: RootState) => selectLoading(store))

  useEffect(() => {
    dispatch(setFruitsEpic())
  }, [dispatch]);

  return (
    <>    
      {loading ? <LoadingPage/> : <Layout/>}
    </>

  )
}

export default App
