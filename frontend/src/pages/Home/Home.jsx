import { Routes, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import UserManual from "../../components/UserManual/UserManual.jsx";
import VoterRegistration from "../../components/VoterRegistration/VoterRegistration.jsx";
import VotingArea from "../../components/VotingArea/VotingArea.jsx";
import Results from "../../components/Results/Results.jsx";
import CandidateDetails from "../../components/CandidateDetails/CandidateDetails.jsx";
import AddCandidate from "../../components/AddCandidate/AddCandidate.jsx";
import ChangePhase from "../../components/ChangePhase/ChangePhase.jsx";

const Home = () => {
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px", width: "100%" }}>
        <Routes>
          <Route path="userManual" element={<UserManual />} />
          <Route path="voterRegistration" element={<VoterRegistration />} />
          <Route path="votingArea" element={<VotingArea />} />
          <Route path="results" element={<Results />} />
          <Route path="candidateDetails" element={<CandidateDetails />} />
          <Route path="addCandidate" element={<AddCandidate />} />
          <Route path="changePhase" element={<ChangePhase />} />
        </Routes>
      </div>

        

    </div>
  );
};

export default Home;
