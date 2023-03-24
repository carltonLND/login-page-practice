import "./button.css";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export enum ButtonKindEnum {
  facebook = "facebook",
  twitter = "twitter",
  google = "google",
}

type Props = { kind: ButtonKindEnum; onClick: () => void };

export function SignupButton({ kind, onClick }: Props) {
  let className: string;
  let icon: JSX.Element;

  let iconSize: string = "60%";

  switch (kind) {
    case ButtonKindEnum.facebook:
      className = "facebook";
      icon = <FaFacebookF size={iconSize} />;
      break;
    case ButtonKindEnum.twitter:
      className = "twitter";
      icon = <FaTwitter size={iconSize} />;
      break;
    case ButtonKindEnum.google:
      className = "google";
      icon = <FaGoogle size={iconSize} />;
      break;
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {icon}
    </button>
  );
}
