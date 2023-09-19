import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import settings from 'src/app/settings/settingsColor.json';
import { SystemSettingsService } from './pages/system/system-settings/system-settings.service';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private title: Title,
    private systemSettingsService: SystemSettingsService,
    private webSocketService: SocketService
  ) {

  }
  public colorTextDay?: string;
  public colorLkThemeDay?: string;
  public colorBtnDay?: string;
  public colorBtnTextDay?: string;
  public mainColorElNight?: string;
  public colorLkBgBlockNight?: string;

  reloadSettings(){
    this.systemSettingsService.settingsReload.subscribe((data)=>{
      if(data){
      
        this.colorTextDay = settings.mainColorTextLight; 
        this.colorLkThemeDay = settings.mainColorThemeLight;   
        this.colorBtnDay = settings.mainColorBtnLight;   
        this.colorBtnTextDay = settings.colorBtnTextDay;   
        // this.mainColorElNight = settings.colorButtonNight; 
        // this.colorLkBgBlockNight = settings.colorThemeNight; 
        // let lkSettings = this.lkUserSettingsService.getSettings()
    
        // if (lkSettings.theme == 'dark'){
        //   if(this.mainColorElNight){
        //     document.documentElement.style.setProperty('--main-color-element', this.mainColorElNight);
        //   }
        //   if(this.colorLkBgBlockNight){
        //   document.documentElement.style.setProperty('--color-LK-bgBlock', this.colorLkBgBlockNight);
        //   }
        // }
        // if(lkSettings.theme == 'light'){
          if(this.colorTextDay){
            document.documentElement.style.setProperty('--color-text', this.colorTextDay);
          }
          if(this.colorLkThemeDay){
            document.documentElement.style.setProperty('--color-theme', this.colorLkThemeDay);
          }
          if(this.colorBtnDay){
            document.documentElement.style.setProperty('--color-btn', this.colorBtnDay);
          }
          if(this.colorBtnTextDay){
            document.documentElement.style.setProperty('--color-btn-text', this.colorBtnTextDay);
          }
        // }
        this.systemSettingsService.settingsReload.emit(false);
      }
    })
  }

  ngOnInit() {
    this.colorTextDay = settings.mainColorTextLight; 
    this.colorLkThemeDay = settings.mainColorThemeLight;   
    this.colorBtnDay = settings.mainColorBtnLight;
    this.colorBtnTextDay = settings.colorBtnTextDay; 
    // this.mainColorElNight = settings.colorButtonNight; 
    // this.colorLkBgBlockNight = settings.colorThemeNight; 
    // let lkSettings = this.lkUserSettingsService.getSettings()

    // if (lkSettings.theme == 'dark'){
    //   if(this.mainColorElNight){
    //     document.documentElement.style.setProperty('--main-color-element', this.mainColorElNight);
    //   }
    //   if(this.colorLkBgBlockNight){
    //   document.documentElement.style.setProperty('--color-LK-bgBlock', this.colorLkBgBlockNight);
    //   }
    // }
    // if(lkSettings.theme == 'light'){
      if(this.colorTextDay){
        document.documentElement.style.setProperty('--color-text', this.colorTextDay);
      }
      if(this.colorLkThemeDay){
        document.documentElement.style.setProperty('--color-theme', this.colorLkThemeDay);
      }
      if(this.colorBtnDay){
        document.documentElement.style.setProperty('--color-btn', this.colorBtnDay);
      }
      if(this.colorBtnTextDay){
        document.documentElement.style.setProperty('--color-btn-text', this.colorBtnTextDay);
      }
    // }
    this.reloadSettings()
    // this.title.setTitle('SaltDo')
    // this.webSocketService.listen('co').subscribe((data) => {
    //   console.log("12312312")
    //   console.log(data)
    // })
  }
}
