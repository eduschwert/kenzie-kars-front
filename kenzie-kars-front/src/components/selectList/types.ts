export interface ISelectProps {
  open: boolean;
  arrayMap: Array<string>;
  primary: string;
  onClickButton: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   onClickItem: (e: any) => void;
}
