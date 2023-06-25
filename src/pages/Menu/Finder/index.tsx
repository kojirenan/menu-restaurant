import styles from "./Finder.module.scss";
import { CgSearch } from "react-icons/cg";

interface PropsFinder {
  find: string;
  setFind: React.Dispatch<React.SetStateAction<string>>;
}

function Finder({ find, setFind }: PropsFinder) {
  return (
    <div className={styles.finder}>
      <input
        value={find}
        onChange={(e) => setFind(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}

export default Finder;
