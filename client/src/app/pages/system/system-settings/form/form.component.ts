import { Component, OnInit } from '@angular/core';
import { SystemSettingsService } from '../system-settings.service';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private systemSettingsService: SystemSettingsService,
    private webSocketService: SocketService) { }

  public colorTextDay?: string;
  public colorThemeDay?: string;
  public colorBtnDay?: string;
  public colorBtnTextDay?: string;

  changeText( event: any ){
    this.colorTextDay = event.target.value;
  }

  changeButton( event: any ){
    this.colorBtnDay = event.target.value;
  }

  changeButtonText( event: any ){
    this.colorBtnTextDay = event.target.value;
  }

  changeTheme( event: any ){
    this.colorThemeDay = event.target.value;
  }

  async getColor() {
    try {
        this.colorTextDay = getComputedStyle(document.documentElement).getPropertyValue('--color-text');
        this.colorThemeDay = getComputedStyle(document.documentElement).getPropertyValue('--color-theme');
        this.colorBtnDay = getComputedStyle(document.documentElement).getPropertyValue('--color-btn');
        this.colorBtnTextDay = getComputedStyle(document.documentElement).getPropertyValue('--color-btn-text');
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit(): void {
    this.getColor();
  }

  changeColor( type: string, event: any ){
    switch(type) {
      case "TEXT" :
        this.changeText(event);
        break;
      case "BUTTON" :
        this.changeButton(event);
        break;
      case "BUTTON_TEXT" :
        this.changeButtonText(event);
        break;
      case "THEME" :
        this.changeTheme(event);
        break ;
    }
  }
  
  saveColor(){
    let settings = {};
      settings = {
        colorButtonDay: this.colorBtnDay,
        colorBtnTextDay: this.colorBtnTextDay,
        colorThemeDay: this.colorThemeDay,
        colorTextDay: this.colorTextDay
      };

    this.systemSettingsService.setColor(settings).subscribe((res) => {
      this.systemSettingsService.settingsReload.emit(true);
      // window.location.reload();

    })
  }
}
