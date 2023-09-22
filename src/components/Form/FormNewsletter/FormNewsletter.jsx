import { TitleSmall } from 'components/Titles/TitleSmall/TitleSmall';
import { Button } from 'components/Buttons/Button/Button';
import icons from '../../../images/icons.svg';
import './FormNewsletter.css';

export const FormNewsletter = () => {
  const iconSend = (
    <svg className="btn--form-newsletter__icon">
      <use href={icons + '#icon-send'} />
    </svg>
  );

  return (
    <form className="form-newsletter">
      <fieldset className="form-newsletter__fieldset">
        <label className="form-newsletter__title" htmlFor="newsletter">
          <TitleSmall title="subscribe to our newsletter" />
        </label>
        <input
          id="newsletter"
          className="form-newsletter__input"
          type="email"
          placeholder="E-mail"
          name="leave your e-mail address"
          autoComplete="list"
          required
        />
      </fieldset>
      <Button
        name="Subscribe"
        icon={iconSend}
        styles="--form-newsletter"
        type="submit"
      />
    </form>
  );
};
