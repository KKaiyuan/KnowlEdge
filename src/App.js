import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './pages/studentProfilePage/studentProfileStore'; 
import StudentProfile from './pages/studentProfilePage/StudentProfile';

function App() {
  return (
    <Provider store={store}>
      <main>
        <StudentProfile />
      </main>
    </Provider>
  );
}

export default App;
