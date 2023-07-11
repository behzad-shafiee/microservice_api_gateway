import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService
{

  async auth ( data: any )
  {
    console.log( data )
    return
  }

}
