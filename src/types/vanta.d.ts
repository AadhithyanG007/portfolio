declare module "vanta/dist/vanta.net.min" {
  const VANTA: {
    default: (options: {
      el: HTMLElement | null;
      THREE: typeof import("three");
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      backgroundColor?: number;
      points?: number;
      maxDistance?: number;
      spacing?: number;
      showDots?: boolean;
    }) => {
      destroy: () => void;
    };
  };
  export = VANTA;
}

declare module "vanta/dist/vanta.waves.min" {
  const VANTA: {
    default: (options: {
      el: HTMLElement | null;
      THREE: typeof import("three");
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      shininess?: number;
      waveHeight?: number;
      waveSpeed?: number;
      zoom?: number;
    }) => {
      destroy: () => void;
    };
  };
  export = VANTA;
}

declare module "vanta/dist/vanta.fog.min" {
  const VANTA: {
    default: (options: {
      el: HTMLElement | null;
      THREE: typeof import("three");
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      highlightColor?: number;
      midtoneColor?: number;
      lowlightColor?: number;
      baseColor?: number;
      blurFactor?: number;
      speed?: number;
      zoom?: number;
    }) => {
      destroy: () => void;
    };
  };
  export = VANTA;
}

declare module "vanta/dist/vanta.dots.min" {
  const VANTA: {
    default: (options: {
      el: HTMLElement | null;
      THREE: typeof import("three");
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      color2?: number;
      backgroundColor?: number;
      size?: number;
      spacing?: number;
      showLines?: boolean;
    }) => {
      destroy: () => void;
    };
  };
  export = VANTA;
}
