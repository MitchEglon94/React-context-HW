import React, { useContext } from "react";
import { MenuContext } from "./../contexts/menu.context";
import styles from "./ToggleDisplay.module.css";
import classNames from "classnames";
import Button from "@mui/material/Button";

function ToggleDisplay() {
  const { text } = styles;
  const { isOpen, toggle } = useContext(MenuContext);
  return (
    <>
      <p className={classNames(text, { open: isOpen })}>
        Toggle Value: {String(isOpen)}
      </p>
      <Button onClick={toggle} variant="contained" disableRipple>
        Outlined
      </Button>
    </>
  );
}

export default ToggleDisplay;
