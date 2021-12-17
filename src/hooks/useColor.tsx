import { createContext, ReactNode, useContext, useState } from 'react';

interface ColorProviderProps {
  children: ReactNode;
}

interface ColorContextData {
  borderColor: string;
  handleSetBorderColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextData>({} as ColorContextData);

export function ColorProvider({ children }: ColorProviderProps) {
  const [borderColor, setBorderColor] = useState('#6BD1FF');

  function handleSetBorderColor(color: string) {
    setBorderColor(color);
  }

  return (
    <ColorContext.Provider value={{ borderColor, handleSetBorderColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);

  return context;
}
