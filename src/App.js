import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/index';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './containers/landing/landing';
import store from './store/store'
import { connect, Provider } from 'react-redux';
function App() {
  return (
    <div className="App"> 
      <Provider store={store}>
        
        <MainContainer />
      </Provider>
      
    </div>
  );
}

export default (App);
