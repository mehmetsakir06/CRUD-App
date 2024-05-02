import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataList from './components/DataList';
import CreateNewUsers from './components/CreateNewUsers';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataList />} > </Route>
        <Route path='/create' element={<CreateNewUsers />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
