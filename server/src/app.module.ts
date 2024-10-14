import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Config } from 'src/config'
import { CategoryModule } from 'src/services'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: Config.db.host,
      port: Config.db.port,
      password: Config.db.password,
      username: Config.db.username,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      database: Config.db.database,
      synchronize: false,
      logging: false
    }),
    CategoryModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
