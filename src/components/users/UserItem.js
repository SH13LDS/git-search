import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'sh13lds',
    avatar_url:
      '  https://avatars2.githubusercontent.com/u/58605089?s=460&u=c188315f7eaa993a34e73f6ba4c91fb0d63229b0&v=4',
    html_url: 'https://github.com/sh13lds',
  };

  render() {
    const { login, avatar_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='mojombo'
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
