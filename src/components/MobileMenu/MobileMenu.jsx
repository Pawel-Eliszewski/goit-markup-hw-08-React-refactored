import { ButtonClose } from 'components/Buttons/ButtonClose/ButtonClose';
import { Navigation } from 'components/Navigation/Navigation';
import { ContactLinks } from 'components/ContactLinks/ContactLinks';
import { SocialsMobileMenu } from 'components/Socials/SocialsMobileMenu/SocialsMobileMenu';
import './MobileMenu.css';
/**
 * @param {{ styles: 'isOpen' | '', onClick?: (ev?: import('react').MouseEvent) => void }} props
 */
export const MobileMenu = ({ onClick, styles }) => {
  return (
    <div className={'mobile__container ' + styles}>
      <ButtonClose onClick={onClick} />
      <Navigation onClick={onClick} styles="--mobile" />
      <div className="mobile__contact-wrapper">
        <ContactLinks styles="--mobile" />
        <SocialsMobileMenu />
      </div>
    </div>
  );
};
