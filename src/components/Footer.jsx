import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    url: "mailto:prashanthsammanu@gmail.com",
    icon: faEnvelope,
  },
  {
    url: "https://www.linkedin.com/in/prashanthsammanu/",
    icon: faLinkedin,
  },
  {
    url: "https://github.com/prashanthsammanu",
    icon: faGithub,
  },
];
function Footer() {
  return (
    <footer className="p-4 min-w-full bg-[#0a192f]">
      <div className="flex flex-row justify-center space-x-4  px-4">
        {socialLinks.map((item, index) => (
          <p key={index}>
            <a href={item.url} className=" hover:border-pink-600">
              <FontAwesomeIcon
                className="h-8 w-8 text-gray-300 hover:text-pink-600"
                icon={item.icon}
              />
            </a>
          </p>
        ))}
      </div>

      <div className="p-4 text-gray-300 text-center">
        © {new Date().getFullYear()} Copyright Prashanth Sammanu
        {/* <a className="" href="">
          {" "}
          Prashanth Sammanu
        </a> */}
      </div>
    </footer>
  );
}

export default Footer;
