import { useContext } from 'react';

import { ResponsiveScalabilityContext } from '../core';

export const useResponsiveScalability = () => {
  const responsiveContext = useContext(ResponsiveScalabilityContext);
  return responsiveContext;
};
