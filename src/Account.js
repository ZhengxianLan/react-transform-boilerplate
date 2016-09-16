import React, {
  Component
} from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
/* 注意这里引入 card 是 card/card */
import Card from 'material-ui/lib/card/card';
import axios from 'axios';
import isEmpty from 'lodash/lang/isEmpty';
import UserInfo from './user/UserInfo';
import Repos from './user/Repos';

import github from './utils/github';

class Account extends Component {

  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    /* 在 constructor 内不可调用 setState() */
    // this.setState({user:{}});
    this.state = {
      user:{},
      repos:{}
    }
  }

  _handleSubmit(e){
    e.preventDefault();
    const account = this.refs.account.getValue();
    github.getGithubInfo(account)
    .then((data)=>{
      this.setState({
        user: data.user,
        repos: data.repos
      });
    });  
  }

  render() {  
    let GithubInfo;
    if(!isEmpty(this.state.user)){
      GithubInfo = (
        <div>
          <UserInfo userInfo = {this.state.user} />
          <Repos repos = {this.state.repos} />
        </div>
      );  
    }
    return (
      <div className="account">
        <Card className="content">
        <form onSubmit={this._handleSubmit} >
          <TextField hintText="Your Github Account" ref="account"/>
          <FlatButton primary={true} label="Search Github" type="submit"/>
        </form>
        {GithubInfo}
        </Card>
      </div>
    );
  }
}

export default Account;