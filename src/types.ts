export interface SidebarItemTypes {
  id: number;
  label: string;
  path: string;
}

export interface StudentTypes {
  key: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  grade?: string;
  address: string;
}