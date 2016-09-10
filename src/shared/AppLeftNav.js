import React, {
  Component
} from 'react';
import LeftNav from 'material-ui/lib/left-nav';

class AppLeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }


  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <LeftNav 
      docked={false}
      onRequestChange={open => this.setState({open})}
      open={this.state.open} />
    );
  }
}
export default AppLeftNav;