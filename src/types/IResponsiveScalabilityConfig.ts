export type IResponsiveScalabilityConfig = {
  baseWidth?: number;
  baseHeight?: number;
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};
