import { Controller } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { AuthService } from './auth.service'

@Controller( 'auth' )
export class AuthController
{
  constructor ( private readonly authService: AuthService ) { }

  @EventPattern(  'auth' )
  auth ( @Payload() data: any )
  {
    return this.authService.auth( data )
  }

}
