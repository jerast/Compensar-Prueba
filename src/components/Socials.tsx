import FBIcon from '@assets/icons/facebook.svg?react';
import AppleIcon from '@assets/icons/apple.svg?react';
import GoogleIcon from '@assets/icons/google.svg?react';

const Socials = () => {
	return (
		<>
			<span className="auth-form__span">o continúa con</span>
			<div className="auth-form__socials">
				<button type="button">
					<FBIcon />
				</button>
				<button type="button">
					<AppleIcon />
				</button>
				<button type="button">
					<GoogleIcon />
				</button>
			</div>
		</>
	)
}

export default Socials;
