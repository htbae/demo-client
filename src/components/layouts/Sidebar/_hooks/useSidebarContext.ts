import React from 'react';
import {
  SidebarContext,
  SidebarContextType,
} from '../_contexts/sidebar-context';

const useSidebarContext = (): SidebarContextType => {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('SidebarProvider is required!');
  }
  return context;
};

export default useSidebarContext;
