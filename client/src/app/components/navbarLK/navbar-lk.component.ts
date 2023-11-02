import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/services/permissionService/permission.service';
import { iconsAdmin } from './navbarIcons';
import { iconsClient } from './navbarIcons';
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

  constructor(private permissionService: PermissionService) {
    this.access = this.permissionService.getLocalSession();
   }
  public menuModuleAdmin: MenuItem[] = [];
  public menuModuleClient: MenuItem[] = [];
  
  public access: any;
  public adminAccess: boolean = false;
  public clientAccess: boolean = false;

  getMenuItems() {
    if(this.access.admin?.access){
      this.adminAccess = true;
      const ModuleKey: any = Object.keys(this.access.admin.modules);
      const ModuleValue: any = Object.values(this.access.admin.modules);
      const menuModules: any = [];
      ModuleKey.forEach((key: any, index: number) => {
        if (ModuleValue[index].access) {
          key
          let iconSvg = iconsAdmin[key];
          if( iconSvg != undefined){
            menuModules.push({ name: iconSvg.name, url: iconSvg.menuName, menuName: iconSvg.menuName, icon: iconSvg.icon, items:[], choiceItem:''})
          }
        }
      })
      this.menuModuleAdmin = menuModules;
    }
    if(this.access.client?.access){
      console.log("this.access", this.access)
      this.clientAccess = true;
      const ModuleKey: any = Object.keys(this.access.client.modules);
      const ModuleValue: any = Object.values(this.access.client.modules);
      const menuModules: any = [];
      ModuleKey.forEach((key: any, index: number) => {
        if (ModuleValue[index].access) {
          let iconSvg = iconsClient[key];
          if( iconSvg != undefined){
            menuModules.push({ name: iconSvg.name, url: iconSvg.menuName, menuName: iconSvg.menuName, icon: iconSvg.icon, items:[], choiceItem:''})
          }
        }
      })
      this.menuModuleClient = menuModules;
    }
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
