import React, {
  Component
} from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';


class Navbar extends Component {

  /* 必须加这个 constructor且包含 context 参数方可在 es6 语法内使用 context 
  [this.context.router is undefined in ES6 class constructor](https://github.com/reactjs/react-router/issues/1059) 
  */
  constructor(props, context) {
    super(props);
    this.state = {
      value: '/home'
    }
  }

  componentWillMount() {
    this.setState({
      value: this._getSelectedIndex()
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: this._getSelectedIndex()
    });
  }

  _getSelectedIndex() {

    let tabs = ['/home', '/account', '/about'];
    return tabs.filter((tab) => this.context.router.isActive(tab))[0];
  }

  _handleTabsChange(value) {
    /* 这里把tab的值传递给 react-router，依托router来切换页面 */
    this.context.router.push(value);
  }

  render() {
    let styles = {
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase'
      },
      tab: {
        height: '64px',
        color: '#fff'
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px'
      }
    };
    return (
      <div className='app-header'>
        {/* 注意onChange要大写 */}
         <Tabs onChange={this._handleTabsChange.bind(this)}
          value={this.state.value} 
          tabItemContainerStyle={{backgroundColor:'transparent'}} style={styles.tabs} inkBarStyle={styles.inkBar}>
       {/* 此处的value要与 routes.js 内的 path 对应 */}
           <Tab style={styles.tab} value='/home' label='Home'></Tab>
           <Tab style={styles.tab} value='/account' label='Account'></Tab>
           <Tab style={styles.tab} value='/about' label='About'></Tab>
         </Tabs>
       </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Navbar;