import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react'
import HomePages from './Component/Pages/HomePages'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FindJobs from './Component/Pages/FindJobs'
import Header from './Component/Header/Header'
import Footer from './Component/LandingPage/Footer'
import FindTalent from './Component/Pages/FindTalent'
import TalentProfilePage from './Component/Pages/TalentProfilePage'
import PostJobPage from './Component/Pages/PostJobPage'
import JobDescPage from './Component/Pages/JobsDescPage';
import ApplyJobPage from './Component/Pages/ApplyJobPage';
import CompanyPage from './Component/Pages/CompanyPage';
import PostedJobPage from './Component/Pages/PostedJobPage';
import JobHistoryPage from './Component/Pages/JobHistoryPage';
import SignupPage from './Component/Pages/SignupPage';
import ProfilePage from './Component/Pages/ProfilePage';





function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS> {/* Wrap your entire app with MantineProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs />} /> 
          <Route path='/find-talent' element={<FindTalent />} />
          <Route path='/jobs' element={<JobDescPage />} />
          <Route path='/apply-job' element={<ApplyJobPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/post-job' element={<PostJobPage />} />
          <Route path='/posted-job' element={<PostedJobPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/login' element={<SignupPage />} />
          <Route path='/job-history' element={<JobHistoryPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='*' element={<HomePages/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
