import React, { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  );
}