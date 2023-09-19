import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SystemSettingsService {
  public settingsReload: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {
  }

  private URL = "/api/system/colors/"

  getColor(){
      return this.http.get<{data: any, status: boolean}>(this.URL);
  }

  setColor(data: any){
    console.log("🚀 ~ file: system-settings.service.ts:19 ~ SystemSettingsService ~ setColor ~ data:", data)
    return this.http.post<{data: any, status: boolean}>(this.URL + 'set/color', { ...data });
  }
}
