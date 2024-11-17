export interface LayoutProps {
  children: React.ReactNode;
}

export interface IUsers {
  id?: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
  avatar?: string;
}

export interface IUsersState {
  users: IUsers[];
}

export interface ISortButton {
  children: React.ReactNode;
  onClick: () => void;
  sort?: boolean;
}

export interface IFormValues {
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
  avatar: string;
}
