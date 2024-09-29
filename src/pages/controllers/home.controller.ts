import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from '../../user/user.service';

@Controller()
export class HomeController {

  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('home')
  home() {
    return {
      message: 'Hello World nest site!' ,
      users: this.userService.findAll()
    };
  }
}
