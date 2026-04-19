declare module 'buildWaysTodo/*' {
  import React from 'react';
  const Component: React.ComponentType<{
    onNavigate: (path: string) => void;
    title: React.ReactNode;
    isMicrofrontend: boolean;
  }>;
  export default Component;
}
