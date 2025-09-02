import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react'
import HomePages from './Compoment/Pages/HomePages'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FindJobs from './Compoment/Pages/FindJobs'
import Header from './Compoment/Header/Header'
import Footer from './Compoment/LandingPage/Footer'
import FindTalent from './Compoment/Pages/FindTalent'
import TalentProfilePage from './Compoment/Pages/TalentProfilePage'
import PostJobPage from './Compoment/Pages/PostJobPage'
import JobDescPage from './Compoment/Pages/JobsDescPage';
import ApplyJobPage from './Compoment/Pages/ApplyJobPage';
import CompanyPage from './Compoment/Pages/CompanyPage';
import PostedJobPage from './Compoment/Pages/PostedJobPage';
import JobHistoryPage from './Compoment/Pages/JobHistoryPage';
import SignupPage from './Compoment/Pages/SignUpPage';
import ProfilePage from './Compoment/Pages/ProfilePage';





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
