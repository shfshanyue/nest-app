// 需要改成环境变量，见 https://docs.nestjs.com/techniques/configuration#expandable-variables
// ~~但是改成环境变量，太过麻烦，而且字符串需要解析，而且无法直接 export，个人项目风险问题较小，因此不改环境变量了~~ 已改成环境变量

// 该服务环境变量管理方案：
const isProduction = process.env.NODE_ENV === 'production'

export const KEY = process.env.KEY
export const SECRET = process.env.SECRET

// redis
export const REDIS_HOST = 'redis'
export const REDIS_PORT = 6379
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD

export const APP_TOKEN = 'daxiange'