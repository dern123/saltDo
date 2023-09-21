import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from 'src/app/services/permissionService/permission.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionModuleGuard implements CanActivate {
  constructor(private permissionService:PermissionService){
  }

  private userPermissions: any = {};
  private routePath: any = [];

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.userPermissions = this.permissionService.getLocalSession();
      this.routePath = state.url.split("/");
      if (!this.userPermissions[this.routePath[1]].modules[route.routeConfig?.path || ""]) {
        return false;
      }
      if (!this.userPermissions[this.routePath[1]].modules[route.routeConfig?.path || ""].access) {
        return false;
      }

      return true;
  }
  
}
