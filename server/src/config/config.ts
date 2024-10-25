import * as dotenv from 'dotenv'
import { getNumber, getString } from 'src/utils'

dotenv.config({ path: '.env' })

export const Config = {
  server: {
    port: getNumber('SERVER_PORT')
  },

  db: {
    host: getString('RUN_ENVIRONMENT') === 'local' ? getString('LOCAL_HOST') : getString('DOCKER_HOST'),
    port: getNumber('DB_PORT'),
    username: getString('DB_USERNAME'),
    password: getString('DB_PASSWORD'),
    database: getString('DB_DATABASE')
  }
}
