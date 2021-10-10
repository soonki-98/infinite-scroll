import styles from "../styles/Post.module.scss";

const Post = ({ index }) => {
  return <div className={styles.post}>{index}</div>;
};
export default Post;
