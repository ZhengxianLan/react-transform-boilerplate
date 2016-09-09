import React, {
  Component
} from 'react';
import Home from './Home';
import Navbar from './shared/Navbar';

class App extends Component {

  render() {
    return (
      <div className="app-wrap">
          <Navbar />
        <Home/>
        <div className="app-footer">Footer</div>
      </div>
    );
  }

}

export default App;