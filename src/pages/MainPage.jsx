import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import BasicModal from 'components/Modal';
import { dataBookApi } from 'redux/dataBookApi';
import { useDispatch, useSelector } from 'react-redux';
import { filterInfo } from '../redux/filter';

export default function MainPage () {
  const { data: info, isSuccess } = dataBookApi.useGetAllDataQuery();

  const dispatch = useDispatch();
  const filterData = useSelector(state => state.filter.value);
  const changeFilter = event => {
    dispatch(filterInfo(event.currentTarget.value));
    
  };
  let visibleData = [];
  const normalizedFilter = Number(filterData);
  if (info) {
    visibleData = info.data.filter(data =>
      data.id === normalizedFilter
    );
  }
  console.log(visibleData);

  return (
    <DataContainer>
      <FilterField changeFilter={changeFilter}/>
      {isSuccess && <DataTable data={info.data} />}
      <BasicModal />
    </DataContainer>
  );
};
