export type DataAPI = {
  data:{ id: number; name: string; year: number; color: string };
};

export interface IData {
  data: Array<DataAPI>;
}