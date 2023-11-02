import './App.css';
import Time from './Time';
import Welcome from './Welcome';

function App() {
  return (
    <>
      <div className='page'>
        <Welcome firstname='Amayas' lastname='Tamarat' />
        <Time />
      </div>
    </>

  );
}

export default App;
