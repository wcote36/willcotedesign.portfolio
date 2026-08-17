"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectVideo, ProjectVideoSection as ProjectVideoSectionType } from "@/lib/projects";

type ProjectVideoSectionProps = {
  videos: ProjectVideo[];
  section?: ProjectVideoSectionType;
};

export function ProjectVideoSection({ videos, section }: ProjectVideoSectionProps) {
  const hideIntro = section?.hideIntro;

  return (
    <section className={hideIntro ? "pt-16" : "mx-auto max-w-[1800px] px-5 pt-24 sm:px-8 lg:px-12"}>
      <div className={hideIntro ? "" : "border-t border-rule pt-10"}>
        {hideIntro ? null : (
          <div className="grid gap-6 md:grid-cols-[0.65fr_1.35fr]">
            <p className="text-[12px] font-medium uppercase leading-none text-muted">{section?.eyebrow ?? "Motion"}</p>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-normal leading-tight sm:text-5xl">
                {section?.title ?? "Motion and campaign touchpoints."}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {section?.body ?? "Video applications extend the identity into animated and social-facing moments."}
              </p>
            </div>
          </div>
        )}

        <div className={hideIntro ? "grid gap-0" : "mt-12 grid gap-5 md:grid-cols-2 lg:gap-8"}>
          {videos.map((video) => (
            <ScrollVideo key={video.src} video={video} immersive={hideIntro} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollVideo({ video, immersive = false }: { video: ProjectVideo; immersive?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  function toggleSound() {
    const element = videoRef.current;

    setIsMuted((current) => {
      const next = !current;

      if (element) {
        element.muted = next;

        if (!next) {
          element.play().catch(() => {});
          setIsPausedByUser(false);
        }
      }

      return next;
    });
  }

  return (
    <figure className="relative">
      <video
        ref={videoRef}
        src={video.src}
        title={video.title}
        aria-label={video.title}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        tabIndex={0}
        className={
          immersive
            ? "h-[80vh] min-h-[360px] w-full cursor-pointer bg-[#efefeb] object-contain outline-none focus-visible:ring-1 focus-visible:ring-ink sm:h-[calc(100vh-96px)] sm:min-h-[520px] dark:bg-[#191918]"
            : "aspect-[16/10] w-full cursor-pointer bg-[#efefeb] object-contain outline-none focus-visible:ring-1 focus-visible:ring-ink dark:bg-[#191918]"
        }
        onClick={togglePlayback}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            togglePlayback();
          }
        }}
      />
      <button
        type="button"
        aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
        className="absolute bottom-4 right-4 bg-[#fafaf8]/90 px-3 py-2 text-[12px] font-medium uppercase leading-none text-ink shadow-sm transition hover:bg-[#fafaf8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink dark:bg-[#111111]/85 dark:text-[#fafaf8] dark:hover:bg-[#111111]"
        onClick={(event) => {
          event.stopPropagation();
          toggleSound();
        }}
      >
        {isMuted ? "Sound On" : "Sound Off"}
      </button>
    </figure>
  );
}
