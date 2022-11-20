import { Layout } from "../ui/layout";

const navItems = [
  {
    name: "Home 🏠",
    url: "/",
  },
  {
    name: "Posts ✏️",
    url: "/posts",
  },
];

const Contact = () => {
  return (
    <Layout showNav={true} navItems={navItems}>
      <div className="flex flex-row w-full justify-start">
        <h1 className="text-4xl font-black font-['Montserrat'] pb-5">
          Contact ✉️
        </h1>
      </div>
      <section className="flex h-min-full flex-col justify-start w-full">
        <p>Emma Campbell</p>
        <a href="mailto:contact@emmacampbell.dev">contact@emmacampbell.dev</a>
        <div></div>
      </section>
    </Layout>
  );
};

export default Contact;
