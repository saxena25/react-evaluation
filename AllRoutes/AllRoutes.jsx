// import React from 'react'
import {Routes,Route} from "react-router-dom";
import QuizSetup from "../components/QuizSetup";
import QuizPage from "../components/QuizPage";
import LeaderBoard from "../components/LeaderBoard";

function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<QuizSetup />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
    </>
  )
}

export default AllRoutes
