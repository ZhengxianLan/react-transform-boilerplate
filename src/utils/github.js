import axios from 'axios';


function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=1`);
}

function getUserInfo(usernam) {
  return axios.get(`https://api.github.com/users/${usernam}`);
}

let github = {
  getGithubInfo(usernam){
    return axios.all([getRepos(usernam),getUserInfo(usernam)])
    .then((arr)=>{
      return {
        repos: arr[0].data,
        user: arr[1].data
      }
    })
  }
}

export default github;
