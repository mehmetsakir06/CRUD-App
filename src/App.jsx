import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataList from './components/DataList';
import CreateNewUser from './components/CreateNewUser';
import EditUsers from './components/EditUsers';
import ReadUser from './components/ReadUser';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataList />} > </Route>
        <Route path='/create' element={<CreateNewUser />} ></Route>
        <Route path='/edit/:id' element={<EditUsers />} ></Route>
        <Route path='/read/:id' element={<ReadUser />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
