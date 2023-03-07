import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { POSTGRES_DATABASE, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_USERNAME } from '../config'

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RedisProvider } from '../lib/redis';

// TODO: 
// 1. 使用 pgcli 在终端看能不能连上 postgres
// 2. 代码中把 postgres 启动，然后看看能不能连上

// 是不是还需要一个命令行
// 不需要啊，docker compose -d 就行了，而且这个 docker 没启动成功，他说缺少 password
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: POSTGRES_HOST,
      port: 5432,
      username: POSTGRES_USERNAME,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DATABASE,
      // TODO
      models: [],
      define: {
        underscored: true,
        freezeTableName: true,
        timestamps: false
      }
    }),
    // TODO
    SequelizeModule.forFeature([])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    RedisProvider
  ],
})
export class AppModule {}
