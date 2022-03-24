import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import StickyNavbar from './StickyNavbar';
import SearchPage from './pages/SearchPage';
import HistoryPage from './pages/HistoryPage';


/**
 * Main component holding the router and navbar
 * @param {*} props 
 */
function App(props) {
  const searchType = useSelector(state => state.search.type);
  useEffect(() => {
    document.title = "Git Repo Search App"
 }, []);

  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <div className="mainContainer">
      { searchType === 'search' ?
        <SearchPage/> : <HistoryPage/> }
      </div>
    </div>
  )
};

export default App;
