import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import BasicModal from 'components/Modal';
import { dataBookApi } from 'redux/dataBookApi';

export const App = () => {
  const info = dataBookApi.useGetAllDataQuery()?.data?.data;
  /* const {data:res} = dataBookApi.useGetAllDataQuery(); */
  console.log(info);

  return (
    <DataContainer>
      <FilterField />
      {info&&<DataTable data={info}/>}
      <BasicModal />
    </DataContainer>
  );
};
