import { Logo } from '../Logo/Logo';
import { Address } from 'components/Address/Address';
import { Socials } from 'components/Socials/Socials';
import { FormNewsletter } from 'components/Form/FormNewsletter/FormNewsletter';
import { socialLinks } from 'data/socialLinks';
import './Footer.css';
import { TitleSmall } from 'components/Titles/TitleSmall/TitleSmall';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main-wrapper">
          <div className="footer__address-social-wrapper">
            <div className="footer__address-group">
              <Logo />
              <Address />
            </div>
            <div className="footer__socials">
              <TitleSmall title="follow us on" />
              <Socials props={socialLinks} styles="--footer" />
            </div>
          </div>
          <FormNewsletter />
        </div>
      </div>
    </footer>
  );
};
