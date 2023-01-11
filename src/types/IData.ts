export type DataAPI = {
   id: number, name: string, year: number, color: string, pantone_value?:string   ;
};

export interface IData {
  data: DataAPI[];
}
