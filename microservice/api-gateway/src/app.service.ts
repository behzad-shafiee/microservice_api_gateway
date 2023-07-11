import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class AppService
{
  constructor ( @Inject( "AUTH" ) private authClient: ClientProxy ) { }

  login ( loginUserDto: LoginUserDto ): any
  {
    this.authClient.emit(  'auth' , {
      status: 'success',
      message: 'user loged in successfully',
      username: loginUserDto.username,
      password: loginUserDto.password,
    } )
    return
  }
}
