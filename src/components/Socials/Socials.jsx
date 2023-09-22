import icons from '../../images/icons.svg';
import './Socials.css';
/**
 * @param {{ styles: '--header' | '--footer' }} props
 */
export const Socials = ({ props, styles }) => {
  return (
    <div className={'socials socials' + styles}>
      <ul className={'socials__list socials__list' + styles}>
        <li className={'socials__item socials__item' + styles}>
          <a
            className={'socials__link socials__link' + styles}
            href={props.instagram}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="instagram"
          >
            <svg className={'socials__icon socials__icon' + styles}>
              <use href={icons + '#icon-instagram'} />
            </svg>
          </a>
        </li>
        <li className={'socials__item socials__item' + styles}>
          <a
            className={'socials__link socials__link' + styles}
            href={props.twitter}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="twitter"
          >
            <svg className={'socials__icon socials__icon' + styles}>
              <use href={icons + '#icon-twitter'} />
            </svg>
          </a>
        </li>
        <li className={'socials__item socials__item' + styles}>
          <a
            className={'socials__link socials__link' + styles}
            href={props.facebook}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="facebook"
          >
            <svg className={'socials__icon socials__icon' + styles}>
              <use href={icons + '#icon-facebook'} />
            </svg>
          </a>
        </li>
        <li className={'socials__item socials__item' + styles}>
          <a
            className={'socials__link socials__link' + styles}
            href={props.linkedin}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="linkedin"
          >
            <svg className={'socials__icon socials__icon' + styles}>
              <use href={icons + '#icon-linkedin'} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};
