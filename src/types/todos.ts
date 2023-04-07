export interface ITodo {
  id: string;
  title: string;
  text: string;
  status: boolean;
}
export interface ITodoData extends Omit<ITodo, 'id'> {}
