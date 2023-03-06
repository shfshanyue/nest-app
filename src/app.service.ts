import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectRedis } from 'lib/redis';

@Injectable()
export class AppService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
