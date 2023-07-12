import { NestFactory, } from '@nestjs/core'
import { Transport } from '@nestjs/microservices'
import { AppModule } from './app.module'

async function bootstrap ()
{
  const port = 3002
  const app = await NestFactory.create( AppModule )
  app.connectMicroservice( {
    transport: Transport.TCP,
    options: {
      port
    }
  } )
  await app.startAllMicroservices()
  await app.listen( port, () =>
  {
    console.log( `server is running on port :${ port }` )

  } )
}
bootstrap()
