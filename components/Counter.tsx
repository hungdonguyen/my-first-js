"use client"
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 border rounded-lg inline-block">
            <p className="text-lg mb-2">Count: {count}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}