type IBreakpoints = {
  sm: number;
  md: number;
  lg?: number;
  xl?: number;
};

type IBaseDimensions = {
  baseWidth: number;
  baseHeight: number;
};

export type IResponsiveScalabilityContext = IBaseDimensions & {
  breakpoints: IBreakpoints;
};

export type IResponsiveScalabilityConfig = Partial<IBaseDimensions> & {
  breakpoints?: Partial<IBreakpoints>;
};
