import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRedis } from '../lib/redis';
import Redis from 'ioredis';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/cache')
  getCache(): Promise<string> {
    return this.redis.get('cache')
  }

  @Get('/cache/:number')
  setCache(@Param('number') num: number): void {
    this.redis.set('cache', num)
  }
}
