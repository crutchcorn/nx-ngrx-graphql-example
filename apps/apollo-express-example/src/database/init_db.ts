import { createConnection } from 'typeorm';
import { Todos } from '../models';
import {ORMConfig} from '../../ormconfig';

export const init_db = async() => {
  const connection = await createConnection(ORMConfig);
  await connection.dropDatabase();
  await connection.synchronize();

  const groceries = new Todos();
  groceries.title = 'Do groceries';
  groceries.description = 'I want to make sure to get eggs, milk, and chocolate milk'
  groceries.creatorName = "Bill Bob"
  await groceries.save();


  const cleaning = new Todos();
  cleaning.title = 'Clean house';
  cleaning.description = 'Make sure that you\'re cleaning under the bed and in the window seal as well'
  cleaning.creatorName = "Jane Jackson"
  await cleaning.save();

  const gaming = new Todos();
  gaming.title = 'Play games';
  gaming.description = 'Don\'t forget to upgrade your wepon with titanite shards';
  gaming.creatorName = "Frank Williams"
  await gaming.save();
};
