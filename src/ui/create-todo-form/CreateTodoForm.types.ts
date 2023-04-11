export interface CreateTodoFormProps {
  setIsTodosModalOpen: (status: boolean) => void;
}
export interface FormTodoValues {
  title: string;
  text: string;
  status: boolean;
}
