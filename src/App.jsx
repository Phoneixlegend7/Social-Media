import { useState } from 'react';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import CreatePost from './components/createpost';
import Postlist from './components/Postlist';
import PostlistProvider from './store/postListStore';
function App() {
    const [selectedTab, setSelectedTab] = useState('Home');


   
  return (
    <PostlistProvider>
    <div className="App-container">
      <Sidebar selectedTab=  {selectedTab} setSelectedTab=  {setSelectedTab}/>
      <div className="content">
      <Header/>
      {selectedTab === 'Home' ? <Postlist></Postlist> : <CreatePost></CreatePost>};
      
      
      <Footer/>
      </div>
     </div>
     </PostlistProvider>
    )
}

export default App
