import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import { dataBookApi } from 'redux/dataBookApi';
import { useDispatch, useSelector } from 'react-redux';
import { filterInfo } from '../redux/filter';
import { useState, useEffect } from 'react';
import { ErrorFallback } from 'components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

export default function MainPage() {
  const { data: info, isSuccess } = dataBookApi.useGetAllDataQuery();
  const [visibleData, setVisibleData] = useState([]);
  const [open, setOpen] = useState(false);
  let [currentItem, setCurrentItem] = useState(null);

  const dispatch = useDispatch();
  const filterData = useSelector(state => state.filter.value);
  const changeFilter = event => {
    dispatch(filterInfo(event.currentTarget.value));
  };

  const normalizedFilter = Number(filterData);
  const handlerModal = event => {
    const currentId = event.currentTarget.firstChild?.textContent;
    if (visibleData) {
      setCurrentItem(visibleData.find(item => item.id === Number(currentId)));
    }
    setOpen(!open);
  };

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {isSuccess && (
          <DataTable
            data={visibleData}
            currentItem={currentItem}
            open={open}
            setOpen={setOpen}
            handlerModal={handlerModal}
          />
        )}
      </ErrorBoundary>
    </DataContainer>
  );
}
