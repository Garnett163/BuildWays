import React, { Suspense } from 'react';
import Preloader from '../../../components/Preloader/Preloader';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';
import MicrofrontendUnavailable from '../../../components/MicrofrontendUnavailable/MicrofrontendUnavailable';
import { useNavigate } from 'react-router-dom';

import('buildWaysTodo/BuildWaysTodo')
  .then(m => console.log('Загрузка микрофронтенда ToDo прошла успешно', m))
  .catch(e => console.error('ERROR', e));

const BuildWaysTodoLoader = React.lazy(() =>
  import('buildWaysTodo/BuildWaysTodo').catch(() => ({ default: () => <MicrofrontendUnavailable /> })),
);

export default function BuildWaysTodoRoute() {
  const navigate = useNavigate();
  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <BuildWaysTodoLoader
          onNavigate={navigate}
          title={
            <>
              Dont be a <s>cunt</s> can’t
            </>
          }
          isMicrofrontend
        />
      </Suspense>
    </ErrorBoundary>
  );
}
