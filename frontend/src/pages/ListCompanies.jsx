import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axiosInstance from "../service/axiosInstance.js";

export default function ListCompanies() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const [search, setSearch] = useState("");
    const [industry, setIndustry] = useState("");
    const [location, setLocation] = useState("");

    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("name");
    const [order, setOrder] = useState("asc");
    const [pages, setPages] = useState(1);

    const fetchData = async () => {
        const res = await axiosInstance.get("/api/companies", {
            params: {search, industry, location, page, sort, order, limit: 10},
        });

        setData(res.data.companies);
        setTotal(res.data.total);
        setPages(res.data.pages);
    };

    useEffect(() => {
        fetchData();
    }, [search, industry, location, page, sort, order]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Companies
                </h1>

                <Link
                    to="/add"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow"
                >
                    Add Company
                </Link>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-white p-5 rounded-xl shadow">
                <input
                    placeholder="Search name..."
                    className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    placeholder="Industry"
                    className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                />
                <input
                    placeholder="Location"
                    className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <select
                    className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="industry">Industry</option>
                    <option value="location">Location</option>
                </select>

                <select
                    className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                >
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="w-full">
                    <thead className="bg-gray-100 text-gray-800">
                    <tr>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Industry</th>
                        <th className="p-3 text-left">Location</th>
                        <th className="p-3 text-left">Website</th>
                        <th className="p-3 text-left">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((c) => (
                        <tr
                            key={c._id}
                            className="border-t hover:bg-gray-50 transition"
                        >
                            <td className="p-3">{c.name}</td>
                            <td className="p-3">{c.industry}</td>
                            <td className="p-3">{c.location}</td>
                            <td className="p-3 text-blue-600 underline">
                                {c.website}
                            </td>
                            <td className="p-3">
                                <Link
                                    to={`/edit/${c._id}`}
                                    className="px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow"
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4">

                {/* Page numbers */}
                <div className="flex gap-2 flex-wrap justify-center">
                    {Array.from({length: pages}, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`px-3 py-1.5 rounded-lg shadow text-sm ${
                                page === p
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                            }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                
                <div className="flex items-center gap-6">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((prev) => prev - 1)}
                        className={`px-4 py-2 rounded-lg shadow ${
                            page === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Prev
                    </button>

                    <span className="font-medium text-gray-700">
            Page {page} of {pages}
        </span>

                    <button
                        disabled={page === pages}
                        onClick={() => setPage((prev) => prev + 1)}
                        className={`px-4 py-2 rounded-lg shadow ${
                            page === pages
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>

        </div>
    );
}