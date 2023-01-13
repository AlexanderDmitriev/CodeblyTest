import { FilterField } from 'components/FilterField';
import { DataTable } from 'components/DataTable';
import { DataContainer } from 'components/Container';
import { dataBookApi } from 'redux/dataBookApi';
import { useDispatch, useSelector } from 'react-redux';
import { filterInfo } from '../redux/filter';
import { useState, useEffect } from 'react';
import { ErrorFallback } from 'components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const { data: info, isSuccess } = dataBookApi.useGetAllDataQuery();
  const [visibleData, setVisibleData] = useState([]);
  const [open, setOpen] = useState(false);
  let [currentItem, setCurrentItem] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  let filterData = useSelector(state => state.filter.value);
  const [page, setPage] = useState(0);

  const updateQueryString = (per_page, page, filter) => {
    const nextPerPageParams = per_page !== '' ? { per_page } : {};
    const nextPageParams = page !== '' ? { page } : {};
    console.log(nextPageParams)
    const nextFilterParams = filter !== '' ? { filter } : {};
    const nextParams = {
      ...nextPerPageParams,
      ...nextPageParams,
      ...nextFilterParams,
    };
    setSearchParams(nextParams);
  };
  
  /* useEffect(() => {
    if (searchParams.get('page') !== '') {
      setPage(parseInt(searchParams.get('page')) - 1);
      console.log(page);
    }
    if (searchParams.get('per_page') !== '') {
      setRowsPerPage(parseInt(searchParams.get('per_page')));
    }
    if (searchParams.get('filter') !== '') {
      dispatch(filterInfo(searchParams.get('filter')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */
  

  useEffect(()=>{
    updateQueryString(rowsPerPage, page + 1, filterData);
    console.log(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[rowsPerPage, page, filterData, setSearchParams]);

  /****FILTER****************** */
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

//*******************END OF FILTER**************** */

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
            setRowsPerPage={setRowsPerPage}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            handlerModal={handlerModal}
          />
        )}
      </ErrorBoundary>
    </DataContainer>
  );
}
