import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginService } from 'src/app/pages/auth/login/login.service';
import { PermissionService } from 'src/app/services/permissionService/permission.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  private userPermissions: any = {}
  private routePath: any = []
  private activeSession: any = {}

  constructor(
    private permissionService: PermissionService,
    private authService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.userPermissions = this.permissionService.getLocalSession();
    this.activeSession = !!this.userPermissions;
    this.routePath = state.url.split("/");
    if (!this.activeSession) {
      return this.permissionService.getPermission().pipe(
        map((data) => {
          if (data.status) {
            if (data.data.user == undefined) {
              this.authService.logout()
              return false
            }
            this.userPermissions = data.data.user.permissions
            if (!this.userPermissions.admin.access) {
              delete this.userPermissions.admin
            }
            sessionStorage.setItem("user_access", JSON.stringify(this.userPermissions))

            if (this.userPermissions[this.routePath[1]]?.access) {
              return true
            } else if (this.userPermissions.client.access) {
              if (this.userPermissions.client.access) {
                this.router.navigate(['client'])
                return false
              }
            } else if (this.userPermissions.admin.access) {
              this.router.navigate(['admin'])
              return false
            } else {
              this.authService.logout()
              return false
            }
          }
          this.authService.logout()
          return false
        }))
    }

    if (this.activeSession) {
      if (this.userPermissions[this.routePath[1]]?.access) {
        return true
      } else if (this.userPermissions.client.access) {
        if (this.userPermissions.client.access) {
          this.router.navigate(['client'])
          return false
        }
      } else if (this.userPermissions.admin.access) {
        this.router.navigate(['admin'])
        return false
      } else {
        this.authService.logout()
        return false
      }
    }
    
    return true;
  }
  
}
