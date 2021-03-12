import { Icon } from '@ant-design/compatible';
const AlarmSvg = () => (
	<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15.2222 12.1158V7.48421C15.2222 3.90308 12.4364 1 9 1C5.56356 1 2.77778 3.90308 2.77778 7.48421V12.1158C2.75134 14.4038 2.13749 16.6428 1 18.6H17C15.8625 16.6428 15.2487 14.4038 15.2222 12.1158V12.1158Z"
			stroke="white"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5.80005 20.2C6.28219 21.1593 7.56346 21.8 9.00005 21.8C10.4366 21.8 11.7179 21.1593 12.2 20.2H5.80005Z"
			fill="white"
		/>
	</svg>
);
export const AlarmIcon = (props) => <Icon component={AlarmSvg} {...props} />;

const CrateSvg = () => (
	<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 9L0.669872 0L9.33013 0L5 9Z" fill="#41098B" />
	</svg>
);
export const CrateIcon = (props) => <Icon component={CrateSvg} {...props} />;

const CreditCardSvg = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="16">
			<path
				d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
				fill="white"
			/>
		</mask>
		<g mask="url(#mask0)">
			<path d="M24 0H0V24H24V0Z" fill="#080808" />
		</g>
	</svg>
);
export const CreditCardIcon = (props) => <Icon component={CreditCardSvg} {...props} />;

const DollarSvg = () => (
	<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M7.51663 10.232C8.65263 10.584 9.58063 10.928 10.3006 11.264C11.0206 11.6 11.6286 12.104 12.1246 12.776C12.6366 13.432 12.8926 14.296 12.8926 15.368C12.8926 16.232 12.6686 17.032 12.2206 17.768C11.7726 18.488 11.1006 19.072 10.2046 19.52C9.30863 19.952 8.22063 20.168 6.94063 20.168H6.91663V22.088H6.00463V20.12C4.34063 19.976 2.98063 19.464 1.92463 18.584C0.884625 17.688 0.308625 16.528 0.196625 15.104H3.79663C3.86063 15.68 4.08463 16.192 4.46863 16.64C4.85263 17.072 5.36463 17.352 6.00463 17.48V12.776L5.52463 12.632C4.37263 12.296 3.43663 11.968 2.71663 11.648C2.01263 11.312 1.40463 10.816 0.892625 10.16C0.396625 9.488 0.148625 8.608 0.148625 7.52C0.148625 6.576 0.396625 5.752 0.892625 5.048C1.40463 4.344 2.10063 3.8 2.98063 3.416C3.87663 3.032 4.88463 2.832 6.00463 2.816V0.8H6.91663V2.84C8.58063 2.952 9.90063 3.44 10.8766 4.304C11.8686 5.152 12.4286 6.24 12.5566 7.568H8.90863C8.82863 7.04 8.61263 6.592 8.26063 6.224C7.92463 5.84 7.47663 5.592 6.91663 5.48V10.04L7.51663 10.232ZM3.77263 7.376C3.77263 7.952 3.96463 8.424 4.34863 8.792C4.73263 9.144 5.28463 9.456 6.00463 9.728V5.408C5.30063 5.44 4.74863 5.624 4.34863 5.96C3.96463 6.296 3.77263 6.768 3.77263 7.376ZM6.91663 17.576C7.65263 17.56 8.22863 17.36 8.64463 16.976C9.06063 16.576 9.26863 16.064 9.26863 15.44C9.26863 14.848 9.06063 14.376 8.64463 14.024C8.24463 13.656 7.66863 13.344 6.91663 13.088V17.576Z"
			fill="#212429"
		/>
	</svg>
);
export const DollarIcon = (props) => <Icon component={DollarSvg} {...props} />;

const ClockSvg = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="20" height="21">
			<path
				d="M22 5.72L17.4 1.86L16.11 3.39L20.71 7.25L22 5.72ZM7.88 3.39L6.6 1.86L2 5.71L3.29 7.24L7.88 3.39ZM12 4C7.03 4 3 8.03 3 13C3 17.97 7.02 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20ZM10.54 14.53L8.41 12.4L7.35 13.46L10.53 16.64L16.53 10.64L15.47 9.58L10.54 14.53Z"
				fill="white"
			/>
		</mask>
		<g mask="url(#mask0)">
			<path d="M24 0H0V24H24V0Z" fill="#080808" />
		</g>
	</svg>
);
export const ClockIcon = (props) => <Icon component={ClockSvg} {...props} />;

const CalendarSvg = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="20" height="22">
			<path
				d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
				fill="white"
			/>
		</mask>
		<g mask="url(#mask0)">
			<path d="M24 0H0V24H24V0Z" fill="#080808" />
		</g>
	</svg>
);
export const CalendarIcon = (props) => <Icon component={CalendarSvg} {...props} />;
