import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Config } from './config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: Config.client.url
    }
  })

  const config = new DocumentBuilder()
    .setTitle('Make free todolist')
    .setDescription(
      `A full-stack todo list application designed for practice, focusing on improving architectural skills and testing various design patterns (container-presenter, layered ...) <br /> 
      in both frontend and backend development.
      `
    )
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {}
  })

  await app.listen(Config.server.port)
}
bootstrap()
