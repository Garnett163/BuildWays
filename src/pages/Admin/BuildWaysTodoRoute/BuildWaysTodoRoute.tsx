import React, { Suspense } from 'react';
import Preloader from '../../../components/Preloader/Preloader';

import('buildWaysTodo/BuildWaysTodo')
  .then(m => console.log('Загрузка микрофронтенда ToDo прошла успешно', m))
  .catch(e => console.error('ERROR', e));

const BuildWaysTodoLoader = React.lazy(() => import('buildWaysTodo/BuildWaysTodo'));

export default function BuildWaysTodoRoute() {
  return (
    <Suspense fallback={<Preloader />}>
      <BuildWaysTodoLoader />
    </Suspense>
  );
}
