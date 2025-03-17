import { SidebarItemTypes, StudentTypes } from '@/types';
import { ColumnsType } from 'antd/es/table';

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'Students',
    path: '/students',
  },
  {
    id: 3,
    label: 'Groups',
    path: '/groups',
  },
];

export const columns: ColumnsType<StudentTypes> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
