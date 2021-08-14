import { Main } from "./posts/Main";
import Post from "./posts/[id]";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Main />
        <Post />
      </Provider>
    </>
  );
}
