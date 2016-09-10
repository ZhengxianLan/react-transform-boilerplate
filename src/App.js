import React, {
  Component
} from 'react';
import Home from './Home';
import Navbar from './shared/Navbar';
import AppBar from 'material-ui/lib/app-bar';
import AppLeftNav from './shared/AppLeftNav';

class App extends Component {

  /* 使用 context 必须加 1 */
  constructor(props, context) {
    super(props, context);
  }

  /* 在该组件生命周期内，仅执行一次 */
  componentWillMount() {
    let setNavbarState = () => {
      this.setState({
        renderNavBar: document.body.clientWidth > 700
      });
    }
    setNavbarState();
    window.onresize = setNavbarState;
  }


  _getAppBar() {
    let tabs = ['/home', '/account', '/about'];
    let title = (tabs.filter((val) => {
      return this.context.router.isActive(val);
    }))[0];
    title = title.replace(/^\/./, (alpha) => alpha.charAt(1).toUpperCase());

    return (<AppBar 
      onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
      title={title} />)
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.handleToggle();
  }



  render() {
    return (
      <div className="app-wrap">
        {this.state.renderNavBar?<Navbar/>:this._getAppBar()}
        {/* 引入左侧导航栏 */}
        <AppLeftNav ref='leftNav' />
        {
          this.props.children
        }
        <div className="app-footer">Footer</div>
     </div>
    );
  }
}

/* 使用 context 必须加 2 */
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default App;