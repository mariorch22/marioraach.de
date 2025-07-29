"use client";
import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

export default function TesterlePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const canvasRef = useRef<any>(null);

  const handleSubmit = async () => {
    if (!canvasRef.current) return;

    const base64 = canvasRef.current.getDataURL("image/png");
    const payload = { image: base64 };

    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log(result);
  };

  const handleClear = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-screen mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="pt-20 pb-12">
            <section className="mt-8 space-y-6">
              <div className="rounded-lg p-4 sm:p-6 mb-8 space-y-4 bg-gray-800/50">
                <div className="w-[280px] h-[280px] bg-gray-700 animate-pulse rounded"></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="pt-20 pb-12">
          {/* Main Content */}
          <section className="mt-8 space-y-6">
            <div className="rounded-lg p-4 sm:p-6 mb-8 space-y-4 bg-gray-800/50">
              <CanvasDraw
                ref={canvasRef}
                brushColor="#ffffff"
                brushRadius={10}
                canvasWidth={280}
                canvasHeight={280}
                backgroundColor="#1f2937"
              />
              <div className="flex gap-4">
                <button 
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Senden
                </button>
                <button 
                  onClick={handleClear}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Löschen
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
