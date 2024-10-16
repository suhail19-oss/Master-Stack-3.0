import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import UserSignin from './Homepage/usersign';
import AdminSignin from './Homepage/admin';
import UserLogin from './Homepage/userlogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user-signin" element={<UserSignin />} />
        <Route path="/admin-signin" element={<AdminSignin />} />
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
