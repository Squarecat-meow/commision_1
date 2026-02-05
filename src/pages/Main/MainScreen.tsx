import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { Loader2Icon } from 'lucide-react';
import { NotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';

function MainScreen() {
  const {
    data: recordMap,
    isLoading,
    isError,
    error,
  } = useQuery<ExtendedRecordMap>({
    queryKey: ['main'],
    queryFn: () => ky.get(`/api/main`).json(),
    retry: 5,
  });

  return (
    <main className="flex justify-center">
      {!isLoading && recordMap ? (
        <NotionRenderer recordMap={recordMap} />
      ) : isError ? (
        <h1 className="text-xl">{error.message}</h1>
      ) : (
        <Loader2Icon className="animate-spin" />
      )}
    </main>
  );
}

export default MainScreen;
