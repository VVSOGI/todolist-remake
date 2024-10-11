import * as dotenv from 'dotenv';
import { getNumber, getString } from 'src/utils';

dotenv.config({ path: '.env' });

export const Config = {
  db: {
    host: getString('DB_HOST'),
    port: getNumber('DB_PORT'),
    username: getString('DB_USERNAME'),
    password: getString('DB_PASSWORD'),
    database: getString('DB_DATABASE'),
  },
};
