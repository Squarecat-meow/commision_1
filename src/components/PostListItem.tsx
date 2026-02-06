import { Link } from 'react-router';
import type { IPostList } from '../../dto/notion.d.ts';
import Authors from './Authors.tsx';

function PostListItem({ element }: { element: IPostList }) {
  const createdAt = new Date(element.createdAt).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });
  return (
    <Link
      to={`/main/board/${element.id}`}
      className="flex flex-col p-2 gap-2 not-last:border-b not-last:border-b-background grow"
    >
      <li>
        <h1 className="text-3xl font-noto-serif font-bold">{element.title}</h1>
        <Authors authors={element.author} />
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-sm">{element.category}</span>
          <span className="text-slate-400 text-xs">{createdAt}</span>
        </div>
      </li>
    </Link>
  );
}

export default PostListItem;
