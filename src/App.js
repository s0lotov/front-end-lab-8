import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SideBar from './components/sidebar';
import { useSelector } from 'react-redux'
import { selectLogoPath, selectMenuList } from './store/doSlice';
import './App.css';


function App() {
  const logoPath = useSelector(selectLogoPath);
  const menuList = useSelector(selectMenuList);
  
  return (
    <div className="app">
      <Header title="Header"/>
      <div className="main-content">
        <SideBar title="My Sidebar" menuList={menuList} logoPath={logoPath}/>
        <Content title="Content"/>
      </div>
      <Footer title="Footer" menuList={menuList}/>
    </div>
  );
}

export default App;