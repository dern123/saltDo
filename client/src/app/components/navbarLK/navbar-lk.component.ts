import { Component, OnInit } from '@angular/core';
import { iconsAdmin } from './sidebarIcons';
interface MenuItem {
  name: string;
  url: string;
  title: string;
  menuName: string;
  icon: string;
  items: MenuItem[];
  choiceItem: string;
}
@Component({
  selector: 'app-navbar-lk',
  templateUrl: './navbar-lk.component.html',
  styleUrls: ['./navbar-lk.component.scss']
})
export class NavbarLKComponent implements OnInit {

  constructor() { }
  public menuModuleAdmin: MenuItem[] = [];
  getMenuItems() {
    const menuModules: any = [];
    iconsAdmin.forEach((item:any) => {
      if(item.menuName == 'dashboard' || item.menuName == 'system'){
        menuModules.push({ name: item.name, url: item.menuName, menuName: item.menuName, icon: item.icon, items:[], choiceItem:''})
      }
    })
    this.menuModuleAdmin = menuModules
  }

  ngOnInit(): void {
    this.getMenuItems()
  }

  clickChoiceMenu( index:any= '', item:any=''){
    if(item.length > 0){
      item.forEach((el:any)=>{
        el.choiceItem = ''
      })
      item[index].choiceItem = 'menu__item-choice'
    }
  }
}
