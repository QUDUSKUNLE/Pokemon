import AppController from '../controllers';
import Validate from '../middleware/index';


export default class Routes {
  private readonly controller: AppController = new AppController();
  private readonly validation: Validate = new Validate();

  public routes(app: any): void {
    app.route('/')
      .get(this.controller.home);

    app.route('/users')
      .get(this.controller.get)
      .post(this.validation.validateRequest, this.controller.post)
      .patch(this.controller.patch);

    app.route('/users/:id')
      .get(this.validation.validateRequest, this.controller.getAuser);
  }
}
