import { createContext } from 'react';

import { BASE_HEIGHT, BASE_WIDTH } from '../config';
import { IResponsiveScalabilityConfig } from '../types';

export const ResponsiveScalabilityContext =
  createContext<IResponsiveScalabilityConfig>({
    baseWidth: BASE_WIDTH,
    baseHeight: BASE_HEIGHT,
  });
