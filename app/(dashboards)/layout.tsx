import React from 'react'

console.log('dashboards layout');

const DashboardsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardsLayout;