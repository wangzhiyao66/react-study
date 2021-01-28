import "./arrlist.css";

import React from'react';

/**
 * 主要学习列表循环语法
 */

class arrlistComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            list: [1,2,3,4,5,6,7,8,9,10]
        }
    }

      // 声明周期  - 挂载
  componentDidMount() {
  }
  // 声明周期  - 销毁
  componentWillUnmount() {
  }

  render() {
      return(
          <div className="arrlist">
              arrlist
          </div>
      )
  }

}

arrlistComponent.defaultProps = {
    // props
}

export default arrlistComponent;