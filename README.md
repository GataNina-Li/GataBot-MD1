# 🧿 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝 🔮

# BOT NO TERMINADO, AUN SE TRABAJA EN EL 

#### ACTIVAR EN HEROKU
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/BrunoSobrino/TheMystic-Bot)

#### HEROKU BUILDPACK
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

### INSTALACIÓN POR TERMUX
1. Escriba los comandos mencionados a continuación dados uno por uno en Termux
```sh
$ termux-setup-storage
$ apt upgrade && apt update -y -y
$ apt install git -y
$ apt install nodejs -y
$ apt install ffmpeg -y
$ apt install imagemagick -y
$ git clone https://github.com/BrunoSobrino/TheMystic-Bot
$ cd TheMystic-Bot
$ npm install
$ npm install -g npm@8.5.4
$ npm update
$ npm start
```
#### SI LA INSTALACION FALLA PRUEBA ESCRIBIENDO
```sh
$ pkg install yarn -y
$ yarn install
```
