import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCompanies from "./pages/ListCompanies";
import AddCompany from "./pages/AddCompany";
import EditCompany from "./pages/EditCompany";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListCompanies />} />
                <Route path="/add" element={<AddCompany />} />
                <Route path="/edit/:id" element={<EditCompany />} />
            </Routes>
        </BrowserRouter>
    );
}