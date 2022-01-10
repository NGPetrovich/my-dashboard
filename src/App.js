import RightProfile from './components/RightProfile';
import LeftProfile from './components/LeftProfile';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
        <div className='flexbox-container'>
          <LeftProfile/>
          <RightProfile/>
        </div>
    </div>

  );
}

export default App;
