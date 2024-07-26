import { WithSidebar } from '@src/layout/custom-layout';

import CustomHeader from '@src/components/custom-header';
import Sidebar from '@src/components/sidebar';

export const LayoutWithSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WithSidebar sidebarContent={Sidebar} mobileDashboardHeader={CustomHeader}>
      {children}
    </WithSidebar>
  );
};
