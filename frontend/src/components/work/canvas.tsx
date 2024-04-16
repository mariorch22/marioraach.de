import React, { useRef, useEffect, useState } from 'react';
import { Button } from '../../ui_components/shadn/components/ui/button';

interface DrawingCanvasProps {
  backgroundColor: string;
  scale: number;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ backgroundColor, scale }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctxRef.current = ctx;
    canvas.width = 28;
    canvas.height = 28;

    // Setze die Hintergrundfarbe
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 256, 256);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = ctxRef.current;
    if (!ctx || !isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / scale); // Berücksichtige die Skalierung
    const y = Math.floor((e.clientY - rect.top) / scale); // Berücksichtige die Skalierung

    ctx.fillStyle = '#fff'; // Farbe für den Strich
    ctx.fillRect(x, y, 2, 2); // Zeichne einen einzelnen Punkt
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 28, 28);
  };

  const sendDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Erstelle ein Bild aus dem Canvas-Inhalt
    const image = new Image();
    image.src = canvas.toDataURL(); // Wandelt den Inhalt des Canvas in eine Daten-URL um

    // Sende das Bild an deine API
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: image.src })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Fehler beim Senden des Bildes.');
      }
      // Handle success response
      console.log('Bild erfolgreich gesendet.');
    })
    .catch(error => {
      // Handle error
      console.error('Fehler beim Senden des Bildes:', error.message);
    });
  };


  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ width: 28 * scale, height: 28 * scale  }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
      <div className='flex justify-between mt-4'>
        <Button onClick={resetCanvas}>Zurücksetzen</Button>
        <Button onClick={sendDrawing}>Senden</Button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
