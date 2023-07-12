import { Body, Controller, Post ,Get} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginUserDto } from './dto/login-user.dto'

@Controller( 'auth' )
export class AuthController
{
  constructor ( private readonly authService: AuthService ) { }

  @Post( 'login' )
  login ( @Body() loginUserDto: LoginUserDto ): any
  {
    return this.authService.login( loginUserDto )
  }

  @Get( 'dashboard' )
  dashboard ( ): any
  {
    return this.authService.dashboard(  )
  }
}
