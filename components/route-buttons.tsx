"use client";

import { useRouter } from "next/navigation";

export const RouteButtons = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-4">
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/upload")}
      >
        Create request
      </button>

      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/sign")}
      >
        Verify existing request
      </button>
    </div>
  );
};
