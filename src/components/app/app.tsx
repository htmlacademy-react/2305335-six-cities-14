import MainPage from '../../pages/main-page/main-page';

type AppPropsType = {
  placesCount: number;
}

function App({placesCount}: AppPropsType): JSX.Element {
  return (
    <MainPage placesCount={placesCount}/>
  );
}

export default App;
