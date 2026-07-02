"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectImage as ProjectImageType } from "@/lib/projects";

type ProjectGalleryProps = {
  images: ProjectImageType[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const showPrevious = () => setActiveIndex((activeIndex! - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((activeIndex! + 1) % images.length);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % images.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index - 1 + images.length) % images.length));
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <section
        aria-label={`${title} imagery`}
        className="mx-auto grid max-w-[1800px] grid-cols-1 gap-5 px-5 sm:px-8 md:grid-cols-6 lg:gap-8 lg:px-12"
      >
        {images.map((image, index) => (
          <figure key={`${image.src}-${index}`} className={image.layout === "full" ? "md:col-span-6" : "md:col-span-3"}>
            <button
              type="button"
              aria-label={`Open ${image.alt}`}
              className={`group relative block w-full overflow-hidden bg-[#efefeb] text-left outline-none transition focus-visible:ring-1 focus-visible:ring-ink dark:bg-[#191918] ${
                image.layout === "full" ? "aspect-[16/10]" : "aspect-[4/3]"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={100}
                unoptimized
                sizes={image.layout === "full" ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-contain transition duration-300 ease-out group-hover:scale-[1.015] group-hover:brightness-[1.03]"
              />
            </button>
            {image.caption ? (
              <figcaption className="mt-3 max-w-prose text-xs leading-relaxed text-muted">{image.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 bg-[#efefeb] p-4 text-ink dark:bg-[#191918] dark:text-paper sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged image`}
          onClick={() => setActiveIndex(null)}
        >
          <div className="pointer-events-none absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-4 text-[12px] uppercase leading-none sm:left-6 sm:right-6 sm:top-6">
            <p>
              {activeIndex! + 1} / {images.length}
            </p>
            <button
              type="button"
              aria-label="Close"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center border border-ink/20 bg-[#efefeb] text-lg leading-none transition hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ink dark:border-paper/30 dark:bg-[#191918] dark:hover:bg-paper dark:hover:text-ink dark:focus-visible:outline-paper"
              onClick={() => setActiveIndex(null)}
            >
              X
            </button>
          </div>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ink/20 bg-[#efefeb]/90 text-2xl leading-none transition hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ink dark:border-paper/30 dark:bg-[#191918]/90 dark:hover:bg-paper dark:hover:text-ink dark:focus-visible:outline-paper sm:left-6 sm:h-14 sm:w-14"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            &lt;
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ink/20 bg-[#efefeb]/90 text-2xl leading-none transition hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ink dark:border-paper/30 dark:bg-[#191918]/90 dark:hover:bg-paper dark:hover:text-ink dark:focus-visible:outline-paper sm:right-6 sm:h-14 sm:w-14"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            &gt;
          </button>

          <div className="flex h-full min-h-0 items-center justify-center px-10 py-14 sm:px-16 sm:py-16">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-full max-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>

          <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center text-[12px] leading-none sm:bottom-6 sm:left-6 sm:right-6">
            <p className="min-w-0 truncate text-center text-ink/60 normal-case dark:text-paper/70">{activeImage.alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
