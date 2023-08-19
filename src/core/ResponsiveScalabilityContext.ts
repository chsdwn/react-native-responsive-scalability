import { createContext } from 'react';

import { BASE_HEIGHT, BASE_WIDTH } from '../config';
import { IResponsiveScalabilityContext } from '../types';

export const ResponsiveScalabilityContext =
  createContext<IResponsiveScalabilityContext>({
    baseWidth: BASE_WIDTH,
    baseHeight: BASE_HEIGHT,
  });
