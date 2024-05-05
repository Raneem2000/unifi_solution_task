import { useState } from 'react';
import CardView from '../../components/Card';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Axios } from '../../Api/axios';
import { TableColumn } from '../../Intarface/table';
import { SEARCH } from '../../Api/Api';

const Users = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>('');
  const queryClient = useQueryClient();

  const {
    data: bikes,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () =>
      Axios.get(`${SEARCH}`, {
        params: {
          page: page,
          per_page: limit,
          query: search,
          stolenness: 'stolen',
        },
      }),
    queryKey: ['bikes', page, limit, search],
  });
  console.log(bikes?.headers);
  const header: TableColumn[] = [
    { key: 'title', name: 'Title' },
    { key: 'description', name: 'Description' },
    { key: 'date_stolen', name: 'Date Stolen' },
    { key: 'year', name: 'Date Reported' },
    { key: 'stolen_location', name: 'Stolen Location' },
    { key: 'large_img', name: 'Image' },
    { key: 'stolen', name: 'Stolen' },
  ];

  return (
    <CardView
      header={header}
      ItemAdd="bike"
      data={bikes?.data?.bikes}
      limit={limit}
      setLimit={setLimit}
      page={page}
      setPage={setPage}
      isLoading={isLoading}
      search={search}
      setSearch={setSearch}
      isError={isError}
      totalPages={100}
    />
  );
};

export default Users;
