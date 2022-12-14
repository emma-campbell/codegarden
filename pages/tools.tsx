import { Layout } from "@/ui/layout";
import { ToolList } from "@/ui/tool-list";

const hardware = [
  {
    title: "Macbook Pro M1, 16in",
    description:
      "My baby and daily driver. 64 GB memory, M1 Max chip, and 2TB of storage.",
    tags: ["laptop", "daily driver"],
  },
  {
    title: "Drop Alt Keyboard",
    description:
      "I've always felt most at home on a 60% keyboard, because I grew up with Mac computers that never had them.",
    tags: ["mechkeys"],
    link: "https://drop.com/buy/drop-alt-mechanical-keyboard",
  },
  {
    title: "Caldigit TS3 Dock",
    description:
      "I've always felt most at home on a 60% keyboard, because I grew up with Mac computers that never had them.",
    tags: ["mechkeys"],
    link: "https://www.caldigit.com/ts3-plus/",
  },
  {
    title: "Apple Magic Trackpad",
    description:
      "Apple's gestures are just unbeatable. Seriously. Pair that with universal control, and being able to use my trackpad to control my laptop and iPad mini... *chef's kiss*.",
    tags: ["mouse"],
    link: "https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface",
  },
  {
    title: "Homepod Mini",
    description:
      "Living with ADHD puts me in constant predicaments where I can't seem to remember what I was doing or what I needed to do. Having a digital assistant solves that.",
    tags: ["assistant"],
    link: "https://www.apple.com/homepod-mini/",
  },
  {
    title: "iPad Mini, (Latest Model)",
    description:
      "I use the mini to keep track of my reminders (tasks) and to take handwritten notes, which tend to stick in my brain better.",
    tags: ["assistant"],
    link: "https://www.apple.com/ipad-mini/",
  },
];

const software = [
  {
    title: "VSCode",
    description:
      "My IDE of choice. Well supported, and fast. Plenty of plugins. Definitely can't go wrong.",
    tags: ["IDE", "text editor"],
    category: "coding",
    link: "https://code.visualstudio.com",
  },
  {
    title: "iTerm 2",
    description:
      "I downloaded iTerm one day, and really never felt any need to find anything else.",
    tags: ["terminal"],
    category: "coding",
    link: "https://iterm2.com",
  },
  {
    title: "Boop",
    description:
      "JSON and XML editor of choice. Generally I'll open things in VS Code, but for quick tasks in Boop.",
    tags: ["text editor"],
    category: "coding",
    link: "https://boop.okat.best",
  },
  {
    title: "Apple Reminders",
    description:
      "My preferred task management tool. I've been on a native kick recently, but I enjoy the simplicity of reminders.",
    tags: ["task management"],
    category: "",
  },
  {
    title: "Apple Notes",
    description:
      "Again, on my native kick. Simple, easy to use. Smart folders, organize by tags. All that really needs to be said.",
    tags: ["notes"],
    category: "",
  },
  {
    title: "Apple Music",
    description: "Can't work without tunes, no?",
    tags: ["music"],
    category: "",
  },
];

const stack = [
  {
    title: "Next.js",
    description:
      "Next.js is a static site generator, which means I get the benefits of React coupled with the speed of a static website.",
    tags: [],
    link: "https://nextjs.org",
  },
  {
    title: "Prisma",
    description:
      "Prisma creates a type-safe client for interacting with the database.",
    tags: [],
    link: "https://www.prisma.io",
  },
  {
    title: "Contentlayer",
    description:
      "Contentlayer acts as a middleware, and turns unstructured content into type-safe data.",
    tags: [],
    link: "https://www.contentlayer.dev",
  },
  {
    title: "Planetscale",
    description:
      "Advanced, serverless SQL database with branching and a generous free plan.",
    tags: [],
    link: "https://planetscale.com",
  },
  {
    title: "Cloudinary",
    description:
      "Fully automated, no-code image optimization platform for image hosting.",
    tags: [],
    link: "https://cloudinary.com",
  },
  {
    title: "TailwindCSS",
    description: "Utility-first CSS framework for quick frontend development.",
    tags: [],
    link: "https://tailwindcss.com",
  },
];

export const Tools = () => {
  return (
    <Layout>
      <section className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold">Toolbox</h1>
        <p className="text-white/60">
          Hardware and software tools I use every day.
        </p>
      </section>
      <hr />
      <section id="hardware">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-1">Hardware</h3>
          <p className="text-white/60">
            Below is a collection of the hardware tools I use on a daily basis.
            I grew up using a Mac, so Apple products tend to be where I feel at
            home.
          </p>
        </div>
        <ToolList items={hardware} />
      </section>
      <hr />
      <section id="software">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-1">Software</h3>
          <p className="text-white/60">
            Listed out is all the software I use to make my life easier. Divided
            out by subcategory.
          </p>
        </div>
        <ToolList
          items={software.filter((item) => item.category === "coding")}
        />
      </section>
      <hr />
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-bold">This Site&apos;s Stack</h3>
          <p className="text-white/60">
            Curious what goes into building this site? Check out the stack below
            (or take a look at the source code on Github).
          </p>
        </div>
        <ToolList items={stack} />
      </section>
    </Layout>
  );
};

export default Tools;
