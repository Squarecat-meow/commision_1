import type { IPostList } from '../../dto/notion.d.ts';

function PostListItem({ element }: { element: IPostList }) {
  const createdAt = new Date(element.createdAt).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });
  return (
    <li className="flex flex-col p-2 gap-2 not-last:border-b not-last:border-b-background grow">
      <h1 className="text-3xl font-noto-serif font-bold">{element.title}</h1>
      <div>
        {element.author.map((el) => (
          <>
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src={el.avatarUrl} alt={`${el.name}의 아바타`} />
              </div>
            </div>
            <span className="text-sm text-slate-600 ml-2">{el.name}</span>
          </>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-500 text-sm">{element.category}</span>
        <span className="text-slate-400 text-xs">{createdAt}</span>
      </div>
    </li>
  );
}

export default PostListItem;
