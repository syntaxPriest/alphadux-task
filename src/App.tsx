import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainWrapper } from './styles/global';
import SideNavigation from './components/sideNavigation';
import { MainBody } from './styles/global';
import Header from './components/header';
import MainSection from './components/MainSection';

function App() {
  return (
    <>
      <MainWrapper>
        <SideNavigation />
          <MainBody>
            <Header />
            <MainSection />
          </MainBody>
      </MainWrapper>
    </>
  );
}

export default App;
