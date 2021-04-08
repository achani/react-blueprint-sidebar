import StylishSidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';
import './App.css';
import menuItems from './Menu';
//import * as s from './App.styles';
//import * as Palette from './colors'


function App() {

  return (
    <div className="App">
      <StylishSidebar menuItems={menuItems} />
      <MainView />
    </div>
  );
}

export default App;
