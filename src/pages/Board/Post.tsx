import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { Loader2Icon } from 'lucide-react';
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { useParams } from 'react-router';
import Authors from '../../components/Authors';

function Post() {
  const { id } = useParams();
  const {
    data: recordMap,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => ky.get<ExtendedRecordMap>(`/api/board/${id}`).json(),
  });

  return (
          <div className="flex items-center gap-2 mb-2">
            <Authors authors={properties.작성자.people} />
          </div>
          <NotionRenderer
            recordMap={data?.recordMap}
            className="rounded-xl "
            disableHeader
            showTableOfContents
          />
        </div>
      ) : (
        <Loader2Icon className="animate-spin" />
      )}
    </>
  );
}

export default Post;
