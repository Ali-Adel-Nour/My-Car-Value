import { Controller,Post , Body} from '@nestjs/common';

import {CreateUserDto} from './dtos/create-user.dto';

@Controller ('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body:CreateUserDto) {
    return 'This action adds a new user';
  }
}
