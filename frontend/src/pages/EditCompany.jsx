import { useParams } from "react-router-dom";
import CompanyForm from "../components/CompanyForm";

export default function EditCompany() {
    const { id } = useParams();

    return (
        <div className="p-6">
            <h1 className="text-xl mb-4">Edit Company</h1>
            <CompanyForm id={id} />
        </div>
    );
}