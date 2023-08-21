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
  const { baseHeight, baseWidth, breakpoints } = config || {};
  const { sm, md, lg, xl } = breakpoints || {};

  const memoizedConfig: IResponsiveScalabilityContext = useMemo(() => {
    return {
      baseWidth: baseWidth || BASE_WIDTH,
      baseHeight: baseHeight || BASE_HEIGHT,
      breakpoints: { sm, md, lg, xl },
    };
  }, [baseHeight, baseWidth, sm, md, lg, xl]);

  return (
    <ResponsiveScalabilityContext.Provider value={memoizedConfig}>
      {children}
    </ResponsiveScalabilityContext.Provider>
  );
};
