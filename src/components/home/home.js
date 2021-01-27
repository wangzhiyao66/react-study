require('./home.css');

import React from 'react';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="one"> 我是一个 home  div 哈 ！！！</div>
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};
export default HomeComponent;
