import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-t-4 border-orange-500 rounded-full animate-spin"></div>
    </div>
  );
}
