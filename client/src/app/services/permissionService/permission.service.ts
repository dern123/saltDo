import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private http: HttpClient) { }
  private userPermission: any = {
    success: false
  };

  getPermission(){
    return this.http.get<{ status: boolean, data: any }>(`/api/auth/check/session`)
  }

  getLocalSession() {
    if(sessionStorage.getItem("user_access")){
      this.userPermission = JSON.parse(sessionStorage.getItem("user_access") || "")
      return this.userPermission
    }
    else {
      return false
    }
  }
}
