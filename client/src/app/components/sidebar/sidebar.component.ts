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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor() { }
  public menuModuleAdmin: MenuItem[] = [];
  getMenuItems() {
    const menuModules: any = [];
    iconsAdmin.forEach((item:any) => {
      if(item.menuName == 'home' || item.menuName == 'system'){
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
