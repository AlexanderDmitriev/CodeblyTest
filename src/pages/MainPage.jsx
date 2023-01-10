import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import BasicModal from 'components/Modal';
import { dataBookApi } from 'redux/dataBookApi';
import { useDispatch, useSelector } from 'react-redux';

export default function MainPage () {
  const { data: info, isSuccess } = dataBookApi.useGetAllDataQuery();

  const dispatch = useDispatch();
  const filterData = useSelector(state => state.filter.value);
  const changeFilter = event => {
    dispatch(filterData(event.currentTarget.value));
  };
  let visibleData = [];

  return (
    <DataContainer>
      <FilterField />
      {isSuccess && <DataTable data={info.data} />}
      <BasicModal />
    </DataContainer>
  );
};
