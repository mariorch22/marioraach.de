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
  const [prediction, setPrediction] = useState<number>()

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

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context from canvas');
      return;
    }
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = Array.from(imageData.data);

    // Konvertiere zu Graustufen und reduziere auf 28x28
    const grayScaleData = new Array(28 * 28);
    for (let i = 0; i < pixels.length; i += 4) {
      const idx = Math.floor(i / 4);
      const row = Math.floor(idx / 28);
      const col = idx % 28;
      // Berechne Graustufenwert (verwende nur den Rotwert, da wir in Schwarz-Weiß zeichnen)
      grayScaleData[row * 28 + col] = pixels[i];
    }

    console.log(grayScaleData); // Dies sollte jetzt 784 Werte ausgeben


    // Sende das Bild an deine API
    fetch('https://emez5x9kcj.execute-api.eu-central-1.amazonaws.com/default/hello-world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        input_array: grayScaleData,
        width: 28,
        height: 28
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Fehler beim Senden des Bildes.');
      }
      return response.json(); // Extrahiere JSON-Daten aus der Antwort
    })
    .then(data => {
      if (data.prediction) {
        setPrediction(data.prediction);
      } else {
        console.error('Keine Vorhersage in der Antwort gefunden.');
      }
    })
    .catch(error => {
      // Handle error
      console.error('Fehler beim Senden des Bildes:', error.message);
    });
  };


  return (
    <div className='flex h-auto'>
      <div className='h-{20rem]'>
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

      <div className='bg-red-400 w-60 m-6'>
        {prediction}
      </div>
    </div>
  );
};

export default DrawingCanvas;
