import { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } from '../config'
import { Inject } from '@nestjs/common';
import Redis from 'ioredis'


export const redis = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD
})


const PROVIDER_KEY = 'redis';

export const RedisProvider = {
  provide: PROVIDER_KEY,
  useValue: redis,
}

export const InjectRedis = (): ParameterDecorator => Inject(PROVIDER_KEY); 
