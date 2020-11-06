import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { resolve } from 'path';
import { Todos } from '../../models';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
	async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
		const options = {
		  // If switching to anything other than sqlite, I suggest stealing some
      // config options from "upstream"
      // @see https://github.com/chnirt/nestjs-graphql-best-practice/blob/cicd/src/config/typeorm/index.ts
      type: 'sqlite' as const,
      database: resolve(__dirname, '../../database/database.sqlite3'),
      entities: [Todos],
		}
		return options
	}
}
