import { WithSidebar } from '@src/layout/custom-layout'
import Sidebar from '@src/components/sidebar'
import CustomHeader from '@src/components/custom-header'

export const LayoutWithSidebar = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <WithSidebar sidebarContent={Sidebar} mobileDashboardHeader={CustomHeader}>
      {children}
    </WithSidebar>
  )
}
