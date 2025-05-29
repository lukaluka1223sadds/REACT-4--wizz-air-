import styles from "./page.module.css";
import Child_1 from "./Reusable-2-Childs/child-1";
import Child_2 from "./Reusable-2-Childs/child-2";

interface children {
  transform?: string;
}

export default function REUSABLE2(e: children) {
  return (
    <div
      style={{ transform: `translate(${e.transform})` }}
      className={styles.REUSABLE2}
    >
      <Child_1></Child_1>
      <Child_2></Child_2>
    </div>
  );
}
