declare module 'react-canvas-draw' {
  import { Component } from 'react';

  interface CanvasDrawProps {
    onChange?: (canvas: any) => void;
    loadTimeOffset?: number;
    lazyRadius?: number;
    brushRadius?: number;
    brushColor?: string;
    catenaryColor?: string;
    gridColor?: string;
    backgroundColor?: string;
    hideGrid?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    disabled?: boolean;
    imgSrc?: string;
    saveData?: string;
    immediateLoading?: boolean;
    hideInterface?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }

  export default class CanvasDraw extends Component<CanvasDrawProps> {
    clear(): void;
    undo(): void;
    getSaveData(): string;
    loadSaveData(saveData: string, immediate?: boolean): void;
  }
} 