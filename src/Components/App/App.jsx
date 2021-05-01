import { Divider } from '@material-ui/core';
import Search from '../Search/Search';
import './App.css';
import Suggestions from '../Suggestions/Suggestions';



function App() {


    return (
        <div className="app-container">
            <h1>SPOTIFY <span className="highlight">Job Scheduler</span></h1>
            <div className="App">
                <Search />
                <Divider style={{
                    height: '0.1rem',
                    backgroundColor: '#bbbbbb'
                }} />
                <Suggestions />
            </div>
        </div>
    );
}

export default App;
