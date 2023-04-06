export interface INote {
  id: string;
  title: string;
  text: string;
  bgUrl?: string;
}
export interface INoteData extends Omit<INote, 'id'> {}
