import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import BasicModal from 'components/Modal';
import { dataBookApi } from 'redux/dataBookApi';

export const App = () => {
  const {data:info, isSuccess} = dataBookApi.useGetAllDataQuery();
console.log(dataBookApi.useGetAllDataQuery().data)

  return (
    <DataContainer>
      <FilterField />
      {isSuccess&&<DataTable data={info.data}/>}
      <BasicModal />
    </DataContainer>
  );
};
