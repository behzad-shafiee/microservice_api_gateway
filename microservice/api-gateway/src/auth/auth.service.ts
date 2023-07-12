import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class AuthService
{

  constructor (
    @Inject( "AUTH" ) private authClient: ClientProxy,
    @Inject( "DASHBOARD" ) private dashboardClient: ClientProxy
  ) { }

  login ( loginUserDto: LoginUserDto ): any
  {

    return this.authClient.send( { cmd: 'login' }, {
      username: loginUserDto.username,
      password: loginUserDto.password,
    } )
  }

  dashboard ()
  {
    return this.dashboardClient.send( { cmd: 'dashboard' }, { name: "behzad" } )
  }

}
