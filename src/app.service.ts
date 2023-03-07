import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectRedis } from 'lib/redis';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {
  constructor(
    // @InjectModel()
    @InjectRedis() private readonly redis: Redis,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
