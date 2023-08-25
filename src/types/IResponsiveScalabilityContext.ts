type IBreakpoints = {
  sm: number;
  md: number;
  lg?: number;
  xl?: number;
};

type IBaseConfig = {
  baseWidth: number;
  baseHeight: number;
  baseOrientation: 'portrait' | 'landscape';
};

export type IResponsiveScalabilityContext = IBaseConfig & {
  breakpoints: IBreakpoints;
};

export type IResponsiveScalabilityConfig = Partial<IBaseConfig> & {
  breakpoints?: Partial<IBreakpoints>;
};
