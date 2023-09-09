type IBreakpoints = {
  sm: number;
  md: number;
  lg?: number;
  xl?: number;
};

export type IOrientation = 'portrait' | 'landscape';

type IBaseConfig = {
  baseWidth: number;
  baseHeight: number;
  baseOrientation: IOrientation;
};

export type IResponsiveScalabilityContext = IBaseConfig & {
  breakpoints: IBreakpoints;
};

export type IResponsiveScalabilityConfig = Partial<IBaseConfig> & {
  breakpoints?: Partial<IBreakpoints>;
};
