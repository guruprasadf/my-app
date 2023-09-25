import './App.css';
import {Provider} from 'react-redux';
import configureStore  from "./redux/index";
import { RoutePaths } from './routes/route-paths';
import {ErrorBoundary} from "./components/activity-planner/error-boundary";
function App() {
  return (
    <ErrorBoundary>
    <Provider store = {configureStore()}>
      <div className="App">
      <header className="App-header">
      <RoutePaths />
      </header>
    </div>
    </Provider>
    </ErrorBoundary>
   
  );
}

export default App;
