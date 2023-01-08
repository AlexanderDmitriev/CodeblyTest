/* import {useState} from 'react'; */
import {FilterField} from 'components/FilterField';
import {DataTable} from 'components/DataTable';
import {DataContainer} from 'components/Container';
import BasicModal from 'components/Modal';
import {dataBookApi} from 'redux/dataBookApi';

export const App = () => {
  const data = dataBookApi.useGetAllDataQuery();
  console.log(data);
  /* const [data, setData] = useState([] as Object); */
  return (
    <DataContainer>
      <FilterField />
      <DataTable />
      <BasicModal/>
    </DataContainer>
    
  );
};
