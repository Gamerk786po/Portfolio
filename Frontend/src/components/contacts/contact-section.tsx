import { motion } from "motion/react";
import Contact from "./contact";
import ContactForm from "./email-form";
// The component for contact-section
const ContactsSection = () => {
  // The data for contacts
  const contacts = [
    {
      title: "+923354342167",
      link: "tel:+923354342167",
      icon: "https://img.icons8.com/ios-filled/50/32cdff/phone.png",
    },
    {
      title: "abdullahpper@gmailcom",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=abdullahpper@gmail.com",
      icon: "https://img.icons8.com/ios-filled/50/32cdff/new-post.png",
    },
    {
      title: "Gamerk786po",
      link: "https://github.com/Gamerk786po",
      icon: "https://img.icons8.com/ios-filled/50/32cdff/github.png",
    },
    {
      title: "Abdullah A.",
      link: "https://www.upwork.com/freelancers/~01bad5fc77abffa2eb",
      icon: "https://img.icons8.com/ios-filled/50/32cdff/upwork.png",
    },
    {
      title: "Abdullah (Gamerk) Adnan",
      link: "https://www.linkedin.com/in/abdullah-adnan-052272305/",
      icon: "https://img.icons8.com/ios-filled/50/32cdff/linkedin.png",
    },
  ];
  // The return the statement
  return (
    <>
      {/* The section for the contents of contacts */}
      <motion.section
        id="contacts"
        className="min-h-screen flex lg:flex-row flex-col items-center md:justify-start xl:justify-center gap-14 mt-10 lg:mt-0 2xl:gap-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* The contacts part of this section */}
        <div className="flex flex-col items-center gap-6 mt-25">
          {/* The heading for contacts */}
          <h1 className="text-gray-400 font-bold px-5 text-3xl xl:text-5xl 2xl:text-7xl leading-relaxed">
            Contact Me
          </h1>
          {/* The div containing the contacts */}
          <div className="px-18">
            <ul className="space-y-6 text-center">
              {contacts.map((contact) => (
                <li>
                  <Contact
                    title={contact.title}
                    icon={contact.icon}
                    link={contact.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Email div */}
        <div className="lg:mt-25 mt-2 2xl:mt-32">
          <ContactForm />
        </div>
      </motion.section>
    </>
  );
};
// Exportion the component
export default ContactsSection;
