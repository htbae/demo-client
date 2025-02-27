import {
  FaDatabase,
  FaRainbow,
  Fa500Px,
  FaAccessibleIcon,
} from 'react-icons/fa';
import DashboardLayoutTemplate from '@/components/templates/DashboardLayoutTemplate';
import { MenuDataType } from '@/components/layouts/Sidebar/_type/sidebar-data-type';

const menuData: MenuDataType[] = [
  {
    id: 0,
    value: 'test1',
    icon: FaRainbow,
    subMenuItems: [
      {
        id: 10,
        value: 'test1-1',
        icon: 'dot',
        subMenuItems: [
          {
            id: 100,
            value: 'test1-1-1',
            subMenuItems: [],
            icon: 'dash',
          },
          {
            id: 101,
            value: 'test1-1-2',
            icon: 'dash',
          },
          {
            id: 102,
            value: 'test1-1-3',
            icon: 'dash',
          },
        ],
      },
      {
        id: 11,
        value: 'test1-2',
        icon: 'number',
      },
      {
        id: 12,
        value: 'test1-3',
        icon: 'number',
      },
    ],
  },
  { id: 1, value: 'test2', icon: Fa500Px },
  { id: 2, value: 'test3', icon: FaAccessibleIcon },
];

const SignIn = () => {
  return (
    <DashboardLayoutTemplate
      body={{ title: 'test', subTitle: 'test1', icon: FaDatabase }}
      sidebar={{
        title: 'demo project',
        activeMenuId: 100,
        menuItems: menuData,
        onClickMenuItem: (id) => console.log(id),
      }}
    >
      <div>test</div>
    </DashboardLayoutTemplate>
  );
};

export default SignIn;
