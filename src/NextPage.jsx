import "./styles/nextPage.css";
import { useEffect, useRef, useState } from "react";
import COLORS from "./Colors";

export default function NextPage() {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const [selectedColor, setSelectedColor] = useState("#f4779a");
  const [isPainting, setIsPainting] = useState(false);
  const [brushSize, setBrushSize] = useState(50);

  const drawCircle = (ctx, x, y, radius, fill, stroke, strokeWidth) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
  };

  const incrementBrushSize = () => {
    setBrushSize((prevSize) => Math.min(prevSize + 5, 100));
  };

  const decrementBrushSize = () => {
    setBrushSize((prevSize) => Math.max(prevSize - 5, 10));
  };

  const startPainting = (e) => {
    setIsPainting(true);
    const canvas = canvasRef2.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopPainting = () => {
    setIsPainting(false);

    const canvas = canvasRef2.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.closePath();
  };

  const onMouseMove = (e) => {
    if (!isPainting) return;

    const canvas = canvasRef2.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  useEffect(() => {
    let BRUSH_SIZE = document.querySelector("#brushSize").value;
    let SELECT_COLOR = document.querySelector(
      "input[name=palette]:checked"
    ).value;

    if (canvasRef1.current) {
      const brushViwer = canvasRef1.current;
      const ctx = brushViwer.getContext("2d");

      brushViwer.width = brushViwer.clientWidth;
      brushViwer.height = brushViwer.clientHeight;

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, brushViwer.width, brushViwer.height);

      drawCircle(
        ctx,
        brushViwer.width / 2,
        brushViwer.height / 2,
        BRUSH_SIZE,
        SELECT_COLOR
      );
    }
  }, [selectedColor, brushSize]);

  useEffect(() => {
    if (canvasRef2.current) {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      const canvasWidth = document.querySelector(".canvas-holder").clientWidth;
      const canvasHeight =
        document.querySelector(".canvas-holder").clientHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      console.log(canvasWidth, canvasHeight);
    }
  }, []);

  return (
    <div className="drawer">
      <div className="brush-area">
        <h3>Draw anything you want!</h3>
        <div>
          <canvas ref={canvasRef1} id="brush-viwer"></canvas>
          <div className="button-area">
            <button
              name="brushSizeController"
              className="plus"
              onClick={incrementBrushSize}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16.16H13.96V24.44H17.04V16.16H25V13.24H17.04V5H13.96V13.24H6V16.16Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              name="brushSizeController"
              className="minus"
              onClick={decrementBrushSize}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 16.6413H23.5V13.2812H7V16.6413Z" fill="white" />
              </svg>
            </button>
            <input
              type="number"
              id="brushSize"
              name="brushSize"
              value={brushSize}
              min="10"
              step="5"
              onChange={(e) => setBrushSize(e.target.value)}
            />
          </div>
        </div>
        <ul className="color-palette">
          {COLORS.map((color) => (
            <li key={color.id}>
              <input
                type="radio"
                name="palette"
                id={color.id}
                value={color.value}
                checked={selectedColor === color.value}
                onChange={() => setSelectedColor(color.value)}
              />
              <label
                htmlFor={color.id}
                style={{ background: color.value }}
              ></label>
            </li>
          ))}
        </ul>
      </div>
      <div className="canvas-holder">
        <canvas
          ref={canvasRef2}
          id="canvas"
          onMouseDown={startPainting}
          onMouseUp={stopPainting}
          onMouseMove={onMouseMove}
        />
      </div>
    </div>
  );
}
