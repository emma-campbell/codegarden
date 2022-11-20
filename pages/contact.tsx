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
      <section className="flex flex-col justify-start w-full space-y-5">
        <div className="">
          <p className="text-sm">
            Thoughts? Questions? Concerns? Fill out the following form and I
            will get back to you as soon as I possibly can.
          </p>
        </div>
        <form className="flex flex-col justify-start w-full space-y-2">
          <div className="flex flex-row">
            <div className="w-full pr-4">
              <label className="font-medium">First Name</label>
              <input
                type="text"
                className="w-full bg-transparent-black rounded-full drop-shadow-md text-lg pl-4"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                className="w-full bg-transparent-black rounded-full drop-shadow-md text-lg pl-4"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full bg-transparent-black rounded-full drop-shadow-md text-lg pl-4"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-medium">Topic</label>
            <select className="form-select w-full bg-transparent-black rounded-full drop-shadow-md text-lg pl-4">
              <option>Software Engineering Roles and Opportunity</option>
              <option>Chronic Illness and Management</option>
              <option>Suggestions</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col w-full pb-8">
            <label className="font-medium">Message</label>
            <textarea className="form-textarea bg-transparent-black rounded-lg drop-shadow-md text-lg pl-4" />
          </div>
          <div className="flex flex-row justify-end">
            <button type="submit" className="rounded-full bg-orange-300 px-4 py-2 hover:bg-orange-400">Submit</button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
