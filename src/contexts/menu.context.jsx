import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  isOpen: false,
  toggle: () => {},
});

export const MenuProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggle,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
