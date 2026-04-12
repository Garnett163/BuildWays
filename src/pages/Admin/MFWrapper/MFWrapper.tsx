import React, { Suspense } from 'react';

const RemoteMF = React.lazy(() => import('mf/MicroFrontendWays'));

export default function MFWrapper() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RemoteMF />
    </Suspense>
  );
}
