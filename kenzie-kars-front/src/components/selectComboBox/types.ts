export interface iComboBox {
  optionsArray: string[];
  label: string;
  onChange: (e: any, value: string | null) => void;
}
