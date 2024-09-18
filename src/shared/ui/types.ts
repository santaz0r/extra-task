type InputTypes = {
  type: 'tel' | 'text' | 'textarea';
  label: string;
  field: string;
  errors?: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
};

type SelectTypes = {
  label: string;
  field: string;
  options: { label: string; value: string }[];
  errors?: string;
};

type AppealFormData = {
  username: string;
  phone: string;
  text: string;
  theme: string;
};

export type { InputTypes, AppealFormData, SelectTypes };
