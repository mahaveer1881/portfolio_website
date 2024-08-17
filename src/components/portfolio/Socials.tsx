import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/mahaveer1881' },
  {
    icon: <FaLinkedin />,
    path: 'https://linkedin.com/in/mahaveer-singh-gurjar',
  },
  { icon: <FaTwitter />, path: 'https://twitter.com/mahaveer1818' },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/_mahaveer_18?igsh=MTdtejE5Nmo1a2M1OA==',
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
