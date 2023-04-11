export interface CreateTodoFormProps {
  isTodosModalOpen: boolean;
  setIsTodosModalOpen: (status: boolean) => void;
}
export interface FormTodoValues {
  title: string;
  text: string;
  status: boolean;
}
