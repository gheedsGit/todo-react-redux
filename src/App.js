import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import ToDoList from "./components/ToDoList";
import AddNewItemForm from "./components/add-new-item-form/AddNewItemForm";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AddNewItemForm />
      <ToDoList />
    </ThemeProvider>
  );
};

export default App;
