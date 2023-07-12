import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module( {
  imports: [
    ClientsModule.register( [
      {
        name: "AUTH",
        transport: Transport.TCP,
        options: {
          port: 3002
        }
      },
      {
        name: "DASHBOARD",
        transport: Transport.TCP,
        options: {
          port: 3001
        }
      }
    ] )
  ],
  controllers: [ AuthController ],
  providers: [ AuthService ]
} )
export class AuthModule { }
