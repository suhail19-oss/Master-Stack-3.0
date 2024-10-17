// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Voting is Ownable {
    struct Candidate {
        string name;
        string party;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;

    uint public totalCandidates;
    bool public electionActive;

    event CandidateAdded(string name, string party);
    event VoteCasted(address voter, uint candidateId);

    // Pass msg.sender to the Ownable constructor
    constructor() Ownable(msg.sender) {
        electionActive = false; // Initialize election as not active
    }

    modifier isElectionActive() {
        require(electionActive, "Election is not active");
        _;
    }

    function addCandidate(string memory _name, string memory _party) external onlyOwner {
        candidates[totalCandidates] = Candidate(_name, _party, 0);
        totalCandidates++;
        emit CandidateAdded(_name, _party);
    }

    function startElection() external onlyOwner {
        electionActive = true;
    }

    function stopElection() external onlyOwner {
        electionActive = false;
    }

    function vote(uint candidateId) external isElectionActive {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(candidateId < totalCandidates, "Invalid candidate ID.");

        candidates[candidateId].voteCount++;
        hasVoted[msg.sender] = true;
        emit VoteCasted(msg.sender, candidateId);
    }

    function getVoteCount(uint candidateId) external view returns (uint) {
        require(candidateId < totalCandidates, "Invalid candidate ID.");
        return candidates[candidateId].voteCount;
    }

    function getCandidates() external view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](totalCandidates);
        for (uint i = 0; i < totalCandidates; i++) {
            allCandidates[i] = candidates[i];
        }
        return allCandidates;
    }

    function getResults() external view returns (Candidate[] memory) {
        Candidate[] memory results = new Candidate[](totalCandidates);
        for (uint i = 0; i < totalCandidates; i++) {
            results[i] = candidates[i];
        }
        return results;
    }

    function isElectionState() external view returns (bool) {
        return electionActive;
    }
}
