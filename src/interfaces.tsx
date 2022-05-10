export interface IBox {
  id: string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
}

export interface IBoxNoId extends Omit<IBox, "id"> {}

export interface IBoxProps extends IBox {
  remove: (id: string) => void;
}
