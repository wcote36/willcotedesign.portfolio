export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  layout?: "full" | "half" | "third";
};

export type ProjectVideo = {
  src: string;
  title: string;
};

export type ProjectVideoSection = {
  eyebrow?: string;
  title?: string;
  body?: string;
  hideIntro?: boolean;
};

export type ProjectSection = {
  eyebrow?: string;
  title: string;
  body: string;
  images?: ProjectImage[];
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tools: string[];
  duration: string;
  description: string;
  problem?: string;
  solution?: string;
  cover: ProjectImage;
  coverVideo?: ProjectVideo;
  gallery: ProjectImage[];
  sections: ProjectSection[];
  videoSection?: ProjectVideoSection;
  videos?: ProjectVideo[];
  featured: boolean;
  span?: "default" | "wide";
};

export const projects: Project[] = [
  {
    title: "Purple House",
    slug: "purple-house",
    category: "Brand Identity / Place System",
    year: "2025",
    client: "Self-initiated",
    role: "Identity, art direction, print system",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    duration: "5 weeks",
    description:
      "A visual identity for an imagined creative house built around room-like storytelling, handmade texture, and quiet ritual. The system balances archival-feeling imagery with direct typographic structure.",
    problem:
      "The concept needed a clearer identity system that could make the place feel specific without adding too much decoration.",
    solution:
      "I used object research, coastal references, simple marks, and restrained typography to give the project a consistent visual direction.",
    cover: {
      src: "/assets/web/room-photo.jpg",
      alt: "Purple House bed installation photo"
    },
    gallery: [
      { src: "/assets/web/room-photo.jpg", alt: "Purple House bed installation", layout: "full" },
      {
        src: "/assets/web/purple-house-design-ideas-2025.png",
        alt: "Purple House design ideas and experiments",
        layout: "full"
      },
      { src: "/assets/web/room-unbranded-snail-print.jpg", alt: "Purple House print detail", layout: "half" },
      { src: "/assets/web/room-coins.jpg", alt: "Purple House coin research", layout: "half" },
      { src: "/assets/web/room-notebook.jpg", alt: "Purple House notebook application", layout: "half" },
      { src: "/assets/web/room-texture.jpg", alt: "Purple House texture study", layout: "half" }
    ],
    sections: [
      {
        eyebrow: "Overview",
        title: "A place system with room to collect meaning.",
        body:
          "Purple House explores how a brand can feel found, lived in, and quietly specific. The identity uses collected objects, photographic fragments, and restrained typography to create a flexible visual language."
      },
      {
        eyebrow: "Applications",
        title: "Print pieces carry the tactile tone.",
        body:
          "The applications lean into material details: notebooks, small printed artifacts, texture studies, and object photography. Each piece works as part of a larger atmosphere without needing heavy decoration."
      }
    ],
    featured: true,
    span: "wide"
  },
  {
    title: "Pro Skills Basketball",
    slug: "pro-skills-basketball",
    category: "Event Identity / Sports Design",
    year: "2025/2026",
    client: "Pro Skills Basketball",
    role: "Event identity, apparel, graphics",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    duration: "8 weeks",
    description:
      "An event identity system for a national basketball summit, built to feel athletic, modular, and direct. The system extends across badges, apparel, agendas, social graphics, and environmental moments.",
    problem:
      "The summit needed graphics that felt active, but still worked clearly across apparel, print, motion, and event materials.",
    solution:
      "I built the system around badges, bold type, color blocking, and repeatable elements that could be used across the different touchpoints.",
    cover: {
      src: "/assets/web/psb-poster-thumbnail.jpg",
      alt: "Pro Skills Basketball Summit poster mockup"
    },
    gallery: [
      { src: "/assets/web/psb-poster-wall-mockup-2.png", alt: "Pro Skills Basketball summit posters on wall", layout: "full" },
      { src: "/assets/web/proskills-badges-2.jpg", alt: "Pro Skills Basketball logo explorations 7 through 12", layout: "half" },
      { src: "/assets/web/proskills-badges-1.jpg", alt: "Pro Skills Basketball logo explorations 12 through 17", layout: "half" },
      { src: "/assets/web/psb-summit-poster-05.png", alt: "Pro Skills Basketball summit poster", layout: "half" },
      { src: "/assets/web/proskills-apparel.jpg", alt: "Apparel design", layout: "half" },
      { src: "/assets/web/psb-mockups-gear-3.png", alt: "Pro Skills Basketball white game day shirt mockup", layout: "half" },
      { src: "/assets/web/psb-mockups-gear-7.png", alt: "Pro Skills Basketball black shirt design mockup", layout: "half" },
      { src: "/assets/web/proskills-cards.jpg", alt: "Printed cards", layout: "half" },
      { src: "/assets/web/proskills-agenda.jpg", alt: "Agenda design", layout: "half" }
    ],
    sections: [
      {
        eyebrow: "Challenge",
        title: "Make a summit feel structured, energetic, and useful.",
        body:
          "The identity needed to hold together across many touchpoints while staying legible in fast-moving sports contexts. A tight mark system, simple geometry, and clear hierarchy keep the work adaptable."
      },
      {
        eyebrow: "System",
        title: "Badges, type, and color do the heavy lifting.",
        body:
          "The graphic language is built from repeatable parts: team-like badges, compressed type, direct color blocking, and simple application rules. The result feels active without becoming noisy."
      }
    ],
    videos: [
      {
        src: "/assets/videos/psb-summit-2026-motion.mp4",
        title: "Summit 2026 motion system"
      },
      {
        src: "/assets/videos/psb-summit-2026-grid.mp4",
        title: "Summit 2026 application grid"
      }
    ],
    featured: true
  },
  {
    title: "Digital Third Spaces",
    slug: "digital-third-spaces",
    category: "Senior Project / Visual System",
    year: "2026",
    client: "University of Connecticut",
    role: "Research, identity, editorial, digital design",
    tools: ["Figma", "Illustrator", "InDesign"],
    duration: "Semester project",
    description:
      "A senior project investigating how digital communities can function as third spaces. The work combines research, publication design, installation, and interface studies into one cohesive system.",
    problem:
      "The project needed to turn the idea of a digital third space into something people could experience as a physical installation.",
    solution:
      "I used printed pieces, interface studies, and installation details to approach the space through experiential design.",
    cover: {
      src: "/assets/web/digital-third-spaces-thumb.jpg",
      alt: "Digital Third Spaces thumbnail image"
    },
    gallery: [
      { src: "/assets/web/thirdspaces-install.jpg", alt: "Installation view", layout: "full" },
      { src: "/assets/web/thirdspaces-workshop.jpg", alt: "Workshop material", layout: "half" },
      { src: "/assets/web/dts-spread-wellbeing-third-spaces.png", alt: "Editorial spread", layout: "half" },
      { src: "/assets/web/thirdspaces-book.jpg", alt: "Printed book", layout: "full" },
      { src: "/assets/web/thirdspaces-mobile.jpg", alt: "Mobile interface", layout: "half" },
      { src: "/assets/web/thirdspaces-interface.jpg", alt: "Interface study", layout: "half" }
    ],
    sections: [
      {
        eyebrow: "Research",
        title: "A visual system for belonging online.",
        body:
          "The project studies how digital spaces create social infrastructure, comfort, and identity. The design system needed to move between critical writing, public installation, and interface prototypes."
      },
      {
        eyebrow: "Outcome",
        title: "Editorial rhythm gives the research a public form.",
        body:
          "Large-format imagery, measured typography, and interface artifacts help the subject feel tangible. The project unfolds as a sequence of evidence rather than a single campaign."
      }
    ],
    featured: true,
    span: "wide"
  },
  {
    title: "Prost Identity System",
    slug: "prost-identity-system",
    category: "Brand Identity / Packaging",
    year: "2025",
    client: "Concept",
    role: "Identity, packaging, print collateral",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    duration: "5 weeks",
    description:
      "A packaging and event identity for an Oktoberfest-inspired brand. The system uses bold color, crisp type, and direct application design across labels, tickets, postcards, and festival materials.",
    problem:
      "The identity needed to feel festive and traditional while still staying organized across packaging and event pieces.",
    solution:
      "I used bold color, structured type, and simple application rules to keep the system clear across labels, tickets, and postcards.",
    cover: {
      src: "/assets/web/oktoberfest-packaging.jpg",
      alt: "Prost packaging system"
    },
    gallery: [
      { src: "/assets/web/oktoberfest-packaging.jpg", alt: "Packaging system", layout: "full" },
      { src: "/assets/web/oktoberfest-festival-pack.jpg", alt: "Festival pack", layout: "half" },
      { src: "/assets/web/oktoberfest-ticket.jpg", alt: "Ticket design", layout: "half" },
      { src: "/assets/web/oktoberfest-label.jpg", alt: "Bottle label", layout: "half" },
      { src: "/assets/web/oktoberfest-postcard.jpg", alt: "Postcard design", layout: "half" }
    ],
    sections: [
      {
        eyebrow: "Identity",
        title: "A festival system with clear product behavior.",
        body:
          "Prost is designed to feel celebratory while staying ordered. The identity relies on confident typography, direct compositions, and a concise set of graphic rules."
      }
    ],
    featured: true
  },
  {
    title: "Animal Tour",
    slug: "animal-tour-hyde-park-london",
    category: "Motion Design / Illustration",
    year: "2025",
    client: "Self-initiated",
    role: "Animation, illustration, motion design",
    tools: ["After Effects", "Illustrator"],
    duration: "Motion study",
    description:
      "A visitor experience concept for Hyde Park in London that turns the park into an animal-led tour. The outcome gives visitors a simple rule: follow the animals, and let them guide you into parts of the park you may not normally notice.",
    problem:
      "Create a tour for visitors to embark on at Hyde Park in London, using the park's animals as the guide.",
    solution:
      "Visitors can only move by following the animals. They lead the experience through parts of the park people might not normally choose to explore.",
    cover: {
      src: "/assets/web/animal-tour-title.png",
      alt: "Animal Tour Hyde Park London animation still"
    },
    coverVideo: {
      src: "/assets/videos/animal-tour-hyde-park-london-2025.mp4",
      title: "Animal Tour Hyde Park London animation"
    },
    gallery: [],
    sections: [],
    videoSection: {
      hideIntro: true
    },
    videos: [
      {
        src: "/assets/videos/animal-tour-hyde-park-london-2025.mp4",
        title: "Animal Tour Hyde Park London 2025"
      }
    ],
    featured: true
  },
  {
    title: "Selected Studies",
    slug: "selected-studies",
    category: "Printmaking / Painting",
    year: "2023-2025",
    client: "Various",
    role: "Printmaking, oil painting, composition",
    tools: ["Linocut", "Oil paint", "Paper", "Canvas"],
    duration: "Ongoing",
    description:
      "A focused pair of tactile studies across printmaking and oil painting. These pieces show hand, material, and image-making range outside the core identity and editorial systems.",
    cover: {
      src: "/assets/web/sunblock-print.jpg",
      alt: "Sun Print"
    },
    gallery: [
      {
        src: "/assets/web/sunblock-print.jpg",
        alt: "Sun Print",
        caption: "Sun Print",
        layout: "half"
      },
      {
        src: "/assets/web/still-life-red.jpg",
        alt: "Skull Oil Painting",
        caption: "Skull Oil Painting",
        layout: "half"
      }
    ],
    sections: [
      {
        eyebrow: "Studies",
        title: "Material studies in print and paint.",
        body:
          "The remaining selected studies focus on tactile process: a sun print and a skull oil painting, both kept separate from the more system-driven portfolio projects."
      }
    ],
    featured: true
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
