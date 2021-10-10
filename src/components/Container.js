import styles from "../styles/Container.module.scss";
import Post from "./Post";
import { useCallback, useEffect, useState } from "react";

const infinite = Array.from({ length: 200 }, (v, i) => i);

const Container = () => {
  const [slicePoint, setSlicePoint] = useState(20);

  const scroll = useCallback(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const scrollBottom =
        document.documentElement.offsetHeight - document.documentElement.clientHeight;
      if (slicePoint === 200) return;
      if (scrollY - scrollBottom === 0) {
        setSlicePoint(slicePoint + 20);
      }
    });
  }, [slicePoint]);

  useEffect(() => {
    if (slicePoint > 199) return;
    scroll();
  }, [slicePoint, scroll]);

  return (
    <div className={styles.container}>
      {infinite.slice(0, slicePoint).map((el, i) => {
        return <Post index={i} />;
      })}
    </div>
  );
};

export default Container;
