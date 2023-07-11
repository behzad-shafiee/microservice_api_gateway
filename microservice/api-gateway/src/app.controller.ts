import { Body, Controller, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { LoginUserDto } from './dto/login-user.dto'

@Controller()
export class AppController
{
  constructor ( private readonly appService: AppService ) { }

  @Post( 'auth' )
  login ( @Body() loginUserDto: LoginUserDto ): any
  {

    return this.appService.login( loginUserDto )
  }
}
