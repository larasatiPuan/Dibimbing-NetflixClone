import { useEffect, useState } from "react";
import Navbar from "./components/homepage/Navbar";

export default function MovieNotes() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("crud_items");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("crud_items", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!title.trim()) return;

    const newItem = {
      id: Date.now(),
      title,
      createdAt: new Date().toISOString(),
    };

    setItems([...items, newItem]);
    setTitle("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setEditId(item.id);
  };

  const handleUpdate = () => {
    setItems(items.map((item) => (item.id === editId ? { ...item, title } : item)));
    setTitle("");
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setTitle("");
    setEditId(null);
  };

  const handleClearAll = () => {
    setItems([]);
    localStorage.removeItem("crud_items");
  };

  return (
    <>
        <Navbar/>
        <div className="min-h-screen w-full  text-white flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl">
            {/* Header */}
            <div className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight">
                Movie Notes
            </h1>
            <p className="text-zinc-400 mt-1">
                Simpan judul film favorit kamu secara lokal.
            </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm">
            {/* Input */}
            <div className="flex gap-3">
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ketik judul film..."
                className="flex-1 rounded-xl bg-zinc-950/60 border border-zinc-800 px-4 py-3
                            placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-red-600/60"
                />

                {editId ? (
                <button
                    onClick={handleUpdate}
                    className="rounded-xl bg-emerald-600 px-4 py-3 font-medium hover:bg-emerald-500 transition"
                >
                    Update
                </button>
                ) : (
                <button
                    onClick={handleAdd}
                    className="rounded-xl bg-red-600 px-4 py-3 font-medium hover:bg-red-500 transition"
                >
                    Add
                </button>
                )}
            </div>

            {/* Action buttons */}
            <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-zinc-400">
                Total: <span className="text-white font-medium">{items.length}</span>
                </div>

                <div className="flex gap-2">
                {editId && (
                    <button
                    onClick={handleCancelEdit}
                    className="rounded-xl border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800 transition"
                    >
                    Cancel
                    </button>
                )}

                {items.length > 0 && (
                    <button
                    onClick={handleClearAll}
                    className="rounded-xl border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800 transition"
                    >
                    Clear All
                    </button>
                )}
                </div>
            </div>

            {/* List */}
            <div className="mt-5">
                {items.length === 0 ? (
                <div className="rounded-xl border border-dashed border-zinc-800 p-6 text-center text-zinc-400">
                    Belum ada movie. Tambahin dulu ya
                </div>
                ) : (
                <ul className="space-y-2">
                    {items.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3"
                    >
                        <div className="min-w-0">
                        <p className="truncate font-medium">{item.title}</p>
                        <p className="text-xs text-zinc-500">
                            {new Date(item.createdAt).toLocaleString()}
                        </p>
                        </div>

                        <div className="flex gap-2 shrink-0">
                        <button
                            onClick={() => handleEdit(item)}
                            className="rounded-lg border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800 transition"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="rounded-lg bg-zinc-800 px-3 py-2 text-sm hover:bg-zinc-700 transition"
                        >
                            Delete
                        </button>
                        </div>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            </div>
        </div>
        </div>
    </>
  );
}
