import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { fetchPosts } from "../store/actions/postsActions";
import styles from "./Main.module.css";
import Link from "next/link";

interface IPostsProps {}

export const Main: React.FC<IPostsProps> = () => {
  const posts = useSelector((state: any) => state.postsReducer);
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts(posts));
  }, []);

  if (posts) {
    return (
      <>
        <Link href={"posts/new"}>
          <button className={styles.button}>Create new</button>
        </Link>
        <div className={styles.postsList}>
          {posts.posts !== null &&
            posts.posts.map((post: any, index: number) => {
              return (
                <>
                  <Link
                    href={{
                      pathname: `posts/${post.id}`,
                      query: { title: `${post.title}`, body: `${post.body}` },
                    }}
                  >
                    <div
                      className={styles.postBox}
                      onClick={() => setPostId(post.id)}
                    >
                      <a>
                        <h3>{post.title}</h3>
                      </a>
                      <div>{post.body}</div>
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </>
    );
  }
  return <div>Данных нет</div>;
};
