import HomeController from '../controller/HomeController';

export default class Router {
  constructor(app: any) {
    app.get('/', HomeController.index);
  }
}
