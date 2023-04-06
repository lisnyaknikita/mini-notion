export interface CreateNoteFormProps {
  isNoteModalOpen: boolean;
  setIsNoteModalOpen: (status: boolean) => void;
}
export interface FormValues {
  title: string;
  bgUrl: string;
}
