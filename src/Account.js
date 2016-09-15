import React, {
  Component
} from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
/* 注意这里引入card 是 card/card */
import Card from 'material-ui/lib/card/card';


class Account extends Component {

  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    const account = this.refs.account.getValue();
    console.log(`account => ${account}`);
  }

  render() {  
    return (
      <div className="account">
        <Card className="content">
        <form onSubmit={this._handleSubmit} >
          <TextField hintText="Your Github Account" ref="account"/>
          <FlatButton primary={true} label="Search Github" type="submit"/>
        </form>
        </Card>
      </div>
    );
  }
}

export default Account;