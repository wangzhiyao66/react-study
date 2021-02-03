import { Subject } from "rxjs";

class ProjectService {
  constructor() {
    super();
  }

  // 菜单数据
  menuData = {};
  // 菜单数据流
  menuDataSubject = new Subject();
  // 设置菜单数据
  setUpdata(value) {
    if (value) {
      this.menuData = value;
      this.menuDataSubject.next(value);
      // localStorage.setItem("USER", JSON.stringify(this.UserInfo));
    } else {
      return "";
    }
  }
  // 获取菜单数据
  getMenuDatadata() {
    return this.menuData;
  }
}

// 项目服务类
const projectService = new ProjectService();
export default projectService;
