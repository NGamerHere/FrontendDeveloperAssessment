import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance.js";

export default function CompanyForm({ id }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        industry: "",
        location: "",
        website: "",
        founded: "",
        employees: "",
    });

    const fetchCompany = async () => {
        const res = await axiosInstance.get(`/api/companies/${id}`);
        setForm(res.data);
    };

    useEffect(() => {
        if (id) fetchCompany();
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();
        if (id) {
            await axiosInstance.put(`/api/companies/${id}`, form);
        } else {
            await axiosInstance.post("/api/companies", form);
        }
        navigate("/");
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-5 text-gray-800">
                {id ? "Update Company" : "Create New Company"}
            </h2>

            <form onSubmit={submit} className="grid gap-4">
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        placeholder={key}
                        className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 capitalize"
                        value={form[key]}
                        onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                        }
                    />
                ))}

                <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-lg shadow">
                    {id ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
}