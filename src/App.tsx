import { Refine } from "@pankod/refine-core";
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { PostList } from "./pages/posts";
import { UsersList } from "./pages/users";

import "@pankod/refine-antd/dist/styles.min.css";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Refine
      Header={Header}
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      Layout={Layout}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      resources={[
        { name: "posts", list: PostList },
        { name: "users", list: UsersList },
      ]}
    />
  );
};
export default App;
