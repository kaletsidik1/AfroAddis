"use client";

import { useEffect, useRef, useState } from "react";

export function MagazineCoverThumb({
  pdfUrl,
  title,
  scale = 0.7,
}: {
  pdfUrl: string;
  title: string;
  scale?: number;
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    (async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf");
        (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
          "https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js";

        const loadingTask = (pdfjsLib as any).getDocument({
          url: pdfUrl,
          signal: controller.signal,
        });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("No canvas context");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: ctx, viewport }).promise;
        if (controller.signal.aborted) return;
        setSrc(canvas.toDataURL("image/jpeg", 0.85));
      } catch (err: any) {
        if (controller.signal.aborted) return;
        setError(err?.message ?? "Failed to load cover");
      }
    })();

    return () => {
      controller.abort();
    };
  }, [pdfUrl, scale]);

  return (
    <div className="aspect-[3/4] w-full bg-gray-100">
      {src ? (
        <img
          src={src}
          alt={`${title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : error ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-100 to-orange-100 px-3 text-center text-xs font-semibold text-red-800">
          {title}
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
          Loading cover…
        </div>
      )}
    </div>
  );
}
