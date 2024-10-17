import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import UserSignin from './Homepage/usersign';
import AdminSignin from './Homepage/admin';
import UserLogin from './Homepage/userlogin';
import AdminLayout from './Admin Pages/AdminLayout';
import AddCandidate from './Admin Pages/Addcandidate';
import ChangePhase from './Admin Pages/ChangePhase';
import Results from './Pages/results';
import UserManual from './Pages/usermanual';
import VoterRegistration from './Pages/voterregistration';
import VotingArea from './Pages/votingarea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user-signin" element={<UserSignin />} />
        <Route path="/admin-signin" element={<AdminSignin />} />
        <Route path="/user-login" element={<UserLogin />} />

        {/* Admin routes with Sidebar */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="add-candidate" element={<AddCandidate />} />
          <Route path="change-phase" element={<ChangePhase />} />
          <Route path="results" element={<Results />} />
          <Route path="user-manual" element={<UserManual />} />
          <Route path="voter-registration" element={<VoterRegistration />} />
          <Route path="voting-area" element={<VotingArea />} />
          {/* Add other admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
