export type IResponsiveScalabilityContext = {
  baseWidth: number;
  baseHeight: number;
  breakpoints: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};

export type IResponsiveScalabilityConfig =
  Partial<IResponsiveScalabilityContext>;
