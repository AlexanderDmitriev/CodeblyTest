import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import BasicModal from 'components/Modal';
import { dataBookApi } from 'redux/dataBookApi';
import { IData } from "types/IData";

export const App = () => {
  const info = dataBookApi.useGetAllDataQuery()?.data;
  console.log(info);

  return (
    <DataContainer>
      <FilterField />
      {info&&<DataTable data={info}/>}
      <BasicModal />
    </DataContainer>
  );
};
