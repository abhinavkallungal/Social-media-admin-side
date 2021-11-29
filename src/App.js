import { Typography } from '@mui/material';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import LoginPage from './Pages/LoginPage/LoginPage';
import ViewUser from './Pages/UserManagement/ViewUser/ViewUser';


function App() {
  return (
    <div className="App">
     <Sidebar>
     <ViewUser/>
     </Sidebar>
    </div>
  );
}

export default App;
