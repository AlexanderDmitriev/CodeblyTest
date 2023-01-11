import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import { dataBookApi } from 'redux/dataBookApi';
import { useDispatch, useSelector } from 'react-redux';
import { filterInfo } from '../redux/filter';
import { useState, useEffect } from 'react';

export default function MainPage() {
  const { data: info, isSuccess } = dataBookApi.useGetAllDataQuery();
  const [visibleData, setVisibleData] = useState([]);

  const dispatch = useDispatch();
  const filterData = useSelector(state => state.filter.value);
  const changeFilter = event => {
    dispatch(filterInfo(event.currentTarget.value));
  };

  const normalizedFilter = Number(filterData);

  useEffect(() => {
    if (info) {
      if (filterData === '') {
        setVisibleData(info.data);
      } else {
        setVisibleData(info.data.filter(data => data.id === normalizedFilter));
      }
    }
  }, [filterData, info, normalizedFilter]);

  return (
    <DataContainer>
      <FilterField changeFilter={changeFilter} />
      {isSuccess && <DataTable data={visibleData} isSuccess={isSuccess} />}
    </DataContainer>
  );
}
