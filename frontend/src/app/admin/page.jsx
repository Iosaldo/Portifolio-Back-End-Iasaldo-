"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then(setFeedbacks);
  }, []);

  async function handleDelete(id) {
    await fetch(`/api/feedback/${id}`, {
      method: "DELETE",
    });

    setFeedbacks((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Feedbacks</h1>

      {feedbacks.map((f) => (
        <div key={f.id} className="border-b border-gray-300 pb-4 mb-4">
          <strong className="text-lg">{f.name}</strong>{" "}
          <span className="text-yellow-500">⭐ {f.rating}</span>
          <p className="text-gray-700">{f.message}</p>
          <button
            onClick={() => handleDelete(f.id)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            🗑 Apagar
          </button>
        </div>
      ))}
    </div>
  );
}
