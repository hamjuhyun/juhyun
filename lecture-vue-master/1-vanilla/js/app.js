import MainController from './controllers/MainController.js'

//돔이 다 로드 되었을때 실행
document.addEventListener('DOMContentLoaded', () => {
  MainController.init()
});