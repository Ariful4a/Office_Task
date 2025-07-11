import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home";
import ContactForm from "./Components/Contact_us";
import Task_06 from "./Components/Task_06";
import Our_serviece from "./Components/Our_serviece";
import Login from "./Components/login";
import Register from "./Components/Ragister";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactForm></ContactForm>} />
        <Route path="/task_06" element={<Task_06></Task_06>} />
        <Route path="/our_service" element={<Our_serviece></Our_serviece>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
