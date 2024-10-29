import './App.scss';
import { Layout } from './layouts/layout';
import { LoadingPage } from './components/loading-page/loading-page';
import { selectLoading } from './store/ui/ui.selectors';
import { setFruitsEpic } from './store/fruits/fruits.epic';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(store => selectLoading(store));

  useEffect(() => {
    dispatch(setFruitsEpic());
  }, [dispatch]);

  return (
    <>    
      {loading ? <LoadingPage/> : <Layout/>}
    </>

  );
}

export default App;
