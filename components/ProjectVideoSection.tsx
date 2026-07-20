"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectVideo } from "@/lib/projects";

type ProjectVideoSectionProps = {
  videos: ProjectVideo[];
};

export function ProjectVideoSection({ videos }: ProjectVideoSectionProps) {
  return (
    <section className="mx-auto max-w-[1800px] px-5 pt-24 sm:px-8 lg:px-12">
      <div className="border-t border-rule pt-10">
        <div className="grid gap-6 md:grid-cols-[0.65fr_1.35fr]">
          <p className="text-[12px] font-medium uppercase leading-none text-muted">Summit 2026</p>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-normal leading-tight sm:text-5xl">Motion and campaign touchpoints.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Video applications extend the summit identity into animated and social-facing moments.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-8">
          {videos.map((video) => (
            <ScrollVideo key={video.src} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollVideo({ video }: { video: ProjectVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPausedByUser, setIsPausedByUser] = useState(false);

  useEffect(() => {
    const element = videoRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPausedByUser) {
          element.play().catch(() => {});
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isPausedByUser]);

  function togglePlayback() {
    const element = videoRef.current;

    if (!element) {
      return;
    }

    if (element.paused) {
      setIsPausedByUser(false);
      element.play().catch(() => {});
    } else {
      setIsPausedByUser(true);
      element.pause();
    }
  }

  return (
    <figure>
      <video
        ref={videoRef}
        src={video.src}
        title={video.title}
        aria-label={video.title}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={0}
        className="aspect-[16/10] w-full cursor-pointer bg-[#efefeb] object-contain outline-none focus-visible:ring-1 focus-visible:ring-ink dark:bg-[#191918]"
        onClick={togglePlayback}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            togglePlayback();
          }
        }}
      />
    </figure>
  );
}
