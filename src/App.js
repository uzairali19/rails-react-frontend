import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import Body from './components/Body';
import { getComics } from './redux/actions/comicActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="sm">
        <Body />
      </Container>
    </>
  );
}

export default App;
