import './App.css';
import {Provider} from 'react-redux';
import configureStore  from "./redux/index";
import { RoutePaths } from './routes/route-paths';

function App() {
  return (
    <Provider store = {configureStore()}>
      <div className="App">
      <header className="App-header">
      <RoutePaths />
      </header>
    </div>
    </Provider>
   
  );
}

export default App;
