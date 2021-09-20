import styles from "../styles/Container.module.scss";
import Post from "./Post";

const infinite = Array.from({ length: 200 }, (v, i) => i);

const Container = () => {
  return (
    <div className={styles.container}>
      {infinite.map((el) => {
        return <Post />;
      })}
    </div>
  );
};

export default Container;
