import "@styles/main.scss";
import MainLayout from "@components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <MainLayout>My content</MainLayout>
    </Router>
  );
}
export default App;
