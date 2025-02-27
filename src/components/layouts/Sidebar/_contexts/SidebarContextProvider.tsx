import { WithChildrenType } from '@/types/components/component-common-type';
import { SidebarContext } from './sidebar-context';
import { useCallback, useState } from 'react';
import { SidebarType } from '../Sidebar';

type SidebarContextProviderType = Omit<SidebarType, 'menuItems'> &
  WithChildrenType;

const SidebarContextProvider = (props: SidebarContextProviderType) => {
  const {
    activeMenuId: defaultActiveMenuId,
    onClickMenuItem,
    children,
    ...rest
  } = props;

  const [activeMenuId, updateActiveMenuId] = useState<
    number | string | undefined
  >(defaultActiveMenuId);

  const clickMenuHandler = useCallback(
    (menuId: number | string) => {
      updateActiveMenuId(menuId);
      onClickMenuItem?.(menuId);
    },
    [updateActiveMenuId, onClickMenuItem]
  );

  return (
    <SidebarContext.Provider
      value={{ activeMenuId, onMenuClick: clickMenuHandler, ...rest }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
