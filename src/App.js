import "./styles.css";
import { Provider } from "./context/Provider";
import Table from "./components/Table";
import Form from "./components/Form";

export default function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Form />
      <Table />
    </Provider>
  );
}
