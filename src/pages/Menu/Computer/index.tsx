import { useState } from "react";
import styles from "./Computer.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface PropsComputer {
  computer: string;
  setComputer: React.Dispatch<React.SetStateAction<string>>;
}

function Computer({ computer, setComputer }: PropsComputer) {
  const [open, setOpen] = useState(false);
  const nameComputer =
    computer && options.find((option) => option.value === computer)?.name;

  return (
    <button
      className={classNames({
        [styles.computer]: true,
        [styles["computer--active"]]: computer !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameComputer || "Ordernar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.computer__options]: true,
          [styles["computer__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.computer__option}
            key={option.value}
            onClick={() => setComputer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}

export default Computer;
