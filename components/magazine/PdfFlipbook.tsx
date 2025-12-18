"use client";

import { useEffect, useRef, useState } from "react";
import "page-flip/src/Style/stPageFlip.css";

export default function PdfFlipbook({
  pdfUrl,
  aspectRatio = 3 / 4,
  scale = 1.25,
}: {
  pdfUrl: string;
  aspectRatio?: number;
  scale?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const flipRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf");
        // Use CDN worker aligned with legacy build to avoid node canvas usage
        (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
          "https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js";

        // Fetch PDF ourselves so we get a clear error if the asset is missing
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`Failed to load PDF (status ${response.status})`);
        }
        const pdfData = new Uint8Array(await response.arrayBuffer());

        const mod = await import("page-flip");
        const PageFlip = (mod as any).PageFlip;

        const loadingTask = (pdfjsLib as any).getDocument({ data: pdfData });
        const pdf = await loadingTask.promise;
        setPageCount(pdf.numPages);

        const images: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: ctx, viewport }).promise;
          images.push(canvas.toDataURL("image/jpeg", 0.92));
        }

        if (cancelled) return;

        const containerEl = containerRef.current;
        if (!containerEl) return;

        const calcSize = () => {
          const w = Math.min(window.innerWidth, 1024);
          const h = Math.round(w / aspectRatio);
          return { width: w, height: h };
        };

        const { width, height } = calcSize();

        flipRef.current = new PageFlip(containerEl, {
          width,
          height,
          size: "stretch",
          minWidth: 320,
          maxWidth: 1920,
          minHeight: 320,
          maxHeight: 2400,
          showCover: true,
          usePortrait: true, // single-page mode on phones
          mobileScrollSupport: false,
          disableFlipByClick: false,
          maxShadowOpacity: 0.3,
          showPageCorners: true,
        });

        flipRef.current.loadFromImages(images);
        setLoading(false);

        // If there is only one page, no flip is possible; inform the user.
        if (images.length <= 1) {
          setError("This PDF has only one page; flipping is disabled.");
        }

        const onResize = () => {
          const { width, height } = calcSize();
          flipRef.current?.update({ width, height, size: "stretch" });
        };
        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
        };
      } catch (e: any) {
        setError(e?.message ?? "Failed to load PDF");
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      try {
        flipRef.current?.destroy?.();
      } catch {}
      flipRef.current = null;
    };
  }, [pdfUrl, aspectRatio, scale]);

  const prev = () => flipRef.current?.flipPrev();
  const next = () => flipRef.current?.flipNext();

  return (
    <div className="w-screen max-w-full overflow-hidden">
      <div className="flex items-center justify-center gap-3 py-2">
        <button
          onClick={prev}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50"
          disabled={loading || pageCount <= 1}
        >
          Prev
        </button>
        <button
          onClick={next}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50"
          disabled={loading || pageCount <= 1}
        >
          Next
        </button>
      </div>

      {loading && (
        <p className="py-4 text-center text-sm text-gray-600">Loading pages…</p>
      )}
      {error && (
        <p className="py-1 text-center text-sm text-red-600">{error}</p>
      )}
      {!loading && !error && pageCount > 0 && (
        <p className="py-1 text-center text-xs text-gray-500">{pageCount} page(s)</p>
      )}

      <div className="flex justify-center">
        <div ref={containerRef} className="pageflip-container" />
      </div>

      <p className="mt-3 text-center text-xs text-gray-500">
        Tip: swipe, drag a corner, or use the buttons.
      </p>
    </div>
  );
}
