import { createContext } from 'react';

import { BASE_HEIGHT, BASE_WIDTH, BREAKPOINTS } from '../config';
import { IResponsiveScalabilityContext } from '../types';

export const ResponsiveScalabilityContext =
  createContext<IResponsiveScalabilityContext>({
    baseWidth: BASE_WIDTH,
    baseHeight: BASE_HEIGHT,
    breakpoints: {
      sm: BREAKPOINTS.sm,
      md: BREAKPOINTS.md,
    },
  });
