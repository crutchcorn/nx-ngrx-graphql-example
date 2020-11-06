import { ConnectionOptions } from 'typeorm';
import { resolve } from 'path';
import { Todos } from './src/models';

console.warn(resolve(__dirname, './src/models/index.ts'));

export const ORMConfig: ConnectionOptions = {
  type: 'sqlite',
  database: resolve(__dirname, './src/database/database.sqlite3'),
  entities: [Todos],
};
