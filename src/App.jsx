import { NavLink, Route, Routes } from 'react-router-dom';
import GetItems from './pages/GetItems';
import CreateItem from './pages/CreateItem';
import UpdateItem from './pages/UpdateItem';

function App() {
  return (
    <div className="container">
      <h1>Item Manager</h1>
      <nav className="nav-links">
        <NavLink to="/" end>
          View Items
        </NavLink>
        <NavLink to="/create">Create Item</NavLink>
        <NavLink to="/update">Update Item</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<GetItems />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/update" element={<UpdateItem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
