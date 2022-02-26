import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getComics } from './redux/actions/comicActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return <>Hello React</>;
}

export default App;
