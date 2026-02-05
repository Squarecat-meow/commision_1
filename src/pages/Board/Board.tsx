import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { Loader2Icon } from 'lucide-react';
import type { IPostList } from '../../../dto/notion.d.ts';
import PostListItem from '../../components/PostListItem.tsx';
import { useState } from 'react';

function Board() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const { data, isLoading, isError, error } = useQuery<IPostList[]>({
    queryKey: ['posts'],
    queryFn: () => ky.get('/api/board/all').json(),
    retry: 5,
  });

  if (!data || isError)
    return (
      <main className="flex h-full justify-center">
        <h1 className="text-xl">{error?.message}</h1>
      </main>
    );

  const groupedPost = data.reduce(
    (acc, post) => {
      const cat = post.category || '카테고리 없음';

      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(post);

      return acc;
    },
    {} as Record<string, IPostList[]>,
  );

  const categories = ['전체', ...Object.keys(groupedPost)];

  const displayedPost =
    selectedCategory === '전체' ? data : groupedPost[selectedCategory] || [];

  return (
    <main className="flex flex-col gap-2 h-full">
      {!isLoading && data ? (
        <>
          <nav>
            {categories.map((el) => (
              <button
                key={el}
                onClick={() => setSelectedCategory(el)}
                className="btn btn-ghost"
              >
                {el}
              </button>
            ))}
          </nav>
          <ul className="w-full bg-white rounded-xl">
            {displayedPost.map((el) => (
              <PostListItem element={el} key={el.id} />
            ))}
          </ul>
        </>
      ) : (
        <Loader2Icon className="animate-spin" />
      )}
    </main>
  );
}

export default Board;
