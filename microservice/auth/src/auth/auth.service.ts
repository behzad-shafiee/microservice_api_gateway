import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService
{

  async auth ( data: any )
  {

    console.log( data )
    console.log( 'user loged in successfully' )

    return {
      message: 'user loged in successfully',
      data
    }
  }

}
