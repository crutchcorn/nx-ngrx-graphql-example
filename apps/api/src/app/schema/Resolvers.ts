import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import {Todos} from '../models';
import {TodoInput} from '../models/Todos';

@Resolver()
export class Resolvers {
  @Query(() => [ Todos ])
  async allTodos(): Promise<Todos[]> {
    return await Todos.find();
  }

  @Query(() => Todos)
  async getTodo(@Arg('id') id: string): Promise<Todos | undefined> {
    return await Todos.findOne({ where: { id } });
  }

  @Mutation(() => Todos)
  async createTodo(@Arg('todo') todo: TodoInput): Promise<Todos> {
    const dbTodo = Todos.create(todo);
    await dbTodo.save();

    return dbTodo;
  }
}
