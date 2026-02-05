export interface INotionResponse {
  results: INotionResult[];
}

export interface INotionResult {
  id: string;
  url: string;
  icon: string;
  title: string;
  category: string;
  categoryColor: string;
  createdAt: string;
  editedBy: {
    name: string;
    email: string;
    avatar: string;
  };
}

export interface IPostList {
  id: string;
  category: string;
  title: string;
  createdAt: Date;
  author: {
    name: string;
    avatarUrl: string;
  }[];
}
