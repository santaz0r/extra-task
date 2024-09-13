type InputTypes = {
  type?: 'tel' | 'text' | 'textarea';
  label: string;
  field: string;
  errors?: string;
  placeholder?: string;
  value: string;
  maxLength: number;
};

type SelectTypes = {
  type?: 'select';
  label: string;
  field: string;
  options: { label: string; value: string }[];
  errors?: string;
  placeholder?: string;
};

// type InputTypes = {
//   type: 'text' | 'number' | 'textarea';
//   field: string;
//   label: string;
// } & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

type AppealFormData = {
  username: string;
  phone: string;
  text: string;
  theme: string;
};

type Test = React.HTMLAttributes<HTMLInputElement>;

export type { InputTypes, Test, AppealFormData, SelectTypes };
