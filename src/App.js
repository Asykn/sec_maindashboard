import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Featured from './component/Featured';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <>
      <div className="container1">
        <Sidebar />
        <div className = "conTry">
        <div className="container2">
          <Header /></div>
          <div className="container3">
            <Content />
            <Featured />
          </div>
        </div>
      </div>

      
    
    
    
    </>
  );
}

export default App;
