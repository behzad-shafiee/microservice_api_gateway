import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AuthService } from './auth.service'

@Controller( 'auth' )
export class AuthController
{
  constructor ( private readonly authService: AuthService ) { }

  @MessagePattern( { cmd: 'login' } )
  auth ( data: any )
  {
    return this.authService.auth( data )
  }

}
