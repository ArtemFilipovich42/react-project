
import './App.scss';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page1/page2';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Navbar } from '../components/navbar';
import { Alert } from '../components/alert';
import { AlertState } from '../context/alert/AlertState';
import { FirebaseState } from '../context/firebes/FirebaseState';


const App = () => {


  return (
    <AlertState>
    <FirebaseState>
      <div>
        
          <div>
            <Navbar />
            <div className='container pt-4'>
              <Alert />
              <h3>Создайте заметку!</h3>
              <Routes>
                <Route path='/' element={<Page1 />} />
                <Route path='/home' element={<Page2 />} />

              </Routes>
            </div>
          </div>
        
      </div>

    </FirebaseState>
    </AlertState>


  );
}

export default App;
