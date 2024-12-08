import "./arrlist.css";

import React from "react";

/**
 * 主要学习列表循环语法
 */

class arrlistComponent extends React.Component {
  constructor() {
    super();
    // this.numberList = this.numberList().bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: "",
      article: "请撰写一篇关于你喜欢的 DOM 元素的文章."
    };
  }

  // 列表
  numberList() {
    const numbers = this.state.list;
    const listItems = numbers.map((number) => (
      <li key={number.toString()}> 我是第 {number} 个 li 元素</li>
    ));
    return <ul class="list-ul">{listItems}</ul>;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeForm(event) {
    this.setState({ article: event.target.value });
  }

  handleSubmit(event) {
    // alert("提交的名字: " + this.state.value);
    console.log("提交的名字: " + this.state.value, this.state.article);
    event.preventDefault();
  }

  // 表单
  formlist() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            名字:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            文章:
            <textarea value={this.state.article} onChange={this.handleChangeForm} />
          </label>
        </div>
        <input type="submit" value="提交" />
      </form>
    );
  }

  // 声明周期  - 挂载
  componentDidMount() { }
  // 声明周期  - 销毁
  componentWillUnmount() { }

  render() {
    return (
      <div class="arrlist">
        arrlist
        {this.numberList()}
        {this.formlist()}
      </div>
    );
  }
}

arrlistComponent.defaultProps = {
  // props
};

export default arrlistComponent;
