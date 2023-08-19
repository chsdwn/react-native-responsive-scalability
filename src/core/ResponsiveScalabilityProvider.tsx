import React, { useMemo } from 'react';

import { BASE_HEIGHT, BASE_WIDTH } from '../config';
import {
  IResponsiveScalabilityConfig,
  IResponsiveScalabilityContext,
} from '../types';
import { ResponsiveScalabilityContext } from './ResponsiveScalabilityContext';

type IProviderProps = {
  config?: Partial<IResponsiveScalabilityConfig>;
  children: React.ReactNode;
};
export const ResponsiveScalabilityProvider = ({
  config,
  children,
}: IProviderProps) => {
  const memoizedConfig: IResponsiveScalabilityContext = useMemo(() => {
    return {
      baseWidth: config?.baseWidth || BASE_WIDTH,
      baseHeight: config?.baseHeight || BASE_HEIGHT,
      breakpoints: config?.breakpoints,
    };
  }, [config]);

  return (
    <ResponsiveScalabilityContext.Provider value={memoizedConfig}>
      {children}
    </ResponsiveScalabilityContext.Provider>
  );
};
