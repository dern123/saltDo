const fs = require('fs')
const path = require('path')

exports.setColor = async(req, res) => {
    try {
        const { colorButtonDay, colorThemeDay, colorTextDay, colorBtnTextDay} = req.body;
        const SETTINGS_PATH = path.join(__dirname, '../../../client/src/app/settings/settingsColor.json');
        console.log("🚀 ~ file: color.controller.js:6 ~ exports.setColor=async ~ SETTINGS_PATH:", SETTINGS_PATH)
        let settingsFile = JSON.parse(fs.readFileSync(SETTINGS_PATH));
    
        // if (theme) {
          settingsFile['mainColorTextLight'] = colorTextDay;
          settingsFile['mainColorThemeLight'] = colorThemeDay;      
          settingsFile['mainColorBtnLight'] = colorButtonDay;
          settingsFile['colorBtnTextDay'] = colorBtnTextDay;
        // } else {
        //   settingsFile['mainColorTextShadow'] = mainColorTextShadow;
        //   settingsFile['mainColorThemeShadow'] = mainColorThemeShadow;      
        //   settingsFile['mainColorBtnShadow'] = mainColorBtnShadow;
        // }
        if (fs.existsSync(SETTINGS_PATH)) {
          fs.unlinkSync(SETTINGS_PATH); // Видалення файлу з кеша
          console.log('Файл з кеша успішно видалено.');
        } else {
          console.log('Файл в кеші не знайдено.');
        }
    
        fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settingsFile))
    
        if(fs.existsSync(SETTINGS_PATH)){
          fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settingsFile), function(err) {
            if (err) {
              console.log('Ошибка при редактировании файла настроек!', err);
            } else {
              let data = JSON.parse(fs.readFileSync(SETTINGS_PATH));
              console.log("Файл настроек изменен!");
              console.log("Обновлені дані:", data);
            }
          });
        }
    
        console.log('Settings saved.');
        res.status(200).send('settingsChanged');
        // return handler.positiveResponse(res, {message: 'settingsChanged'})
      } catch (e) {
        console.log(e);
        res.status(500).send('Error saving settings.');
      }
    }
    exports.getColor = async(req, res) => {
      try{
        const SETTINGS_PATH = path.join(__dirname, '../../../client/src/app/settings/settingsColor.json');
        let settingsFile = JSON.parse(fs.readFileSync(SETTINGS_PATH));
        return handler.positiveResponse(res, settingsFile)
      }
      catch(e){
        console.log(e);
      }
    }