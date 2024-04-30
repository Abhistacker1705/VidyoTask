import {useState} from 'react';
import {cn} from '../../../utils/cn';

export const Card = ({plan, clips, clipsToggled}) => {
	return (
		<div
			className={cn(
				'flex flex-col flex-1 gap-0 p-4 rounded-lg border border-solid border-stone-300 relative',

				'bg-white text-garlic-800'
			)}>
			<img
				loading="lazy"
				src="/PathCardBg.png"
				alt="Pricing plan"
				className="gap-0 w-full aspect-[1.37] absolute top-0 right-0"
			/>
			<div className="flex z-10 flex-col gap-5 pb-20 mx-4 mt-0 max-md:mx-2.5">
				<div className="flex flex-col gap-5 leading-[142%]">
					<div className="flex flex-col gap-3 font-semibold">
						<div className="flex gap-1 items-center text-sm tracking-normal whitespace-nowrap text-stone-800">
							{plan.planName}
							{plan.planName == 'Growth' && (
								<div className="bg-lime text-black py-1 px-2 rounded-sm">
									<p className="text-xs">Recommended</p>
								</div>
							)}
						</div>
						<div className="pb-3 mt-3 text-2xl tracking-tight text-zinc-600">
							<span className="">
								{plan.price.currency} {plan.price.amount}
							</span>{' '}
							<span className="text-sm tracking-normal leading-5 text-zinc-600">
								/month
							</span>
						</div>
					</div>
					<button className="justify-center items-center px-5 py-3 mt-6 text-sm font-medium tracking-normal rounded-lg bg-stone-100 text-stone-400 hover:bg-[#943DEC] hover:text-garlic-300">
						{plan.planName == 'Free' ? (
							'Start For Free'
						) : (
							<p>{'Choose this plan  >'}</p>
						)}
					</button>
				</div>
				<div className="flex flex-col gap-5 mt-5 mb-20 max-md:mb-10">
					<div className="flex flex-col gap-0 justify-center">
						<hr className="shrink-0 gap-0 h-px bg-gray-200" />
					</div>
					<div className="flex flex-col gap-0 justify-center mt-5 text-sm tracking-normal leading-5 text-stone-700">
						<div className="flex flex-col gap-4 justify-center">
							{plan.features.map((feature, index) => (
								<FeatureItem
									key={index}
									text={feature.text}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const CustomCard = ({plan, clips, clipsToggled}) => {
	const [selectedOption, setSelectedOption] = useState(1200);

	return (
		<div
			className={cn(
				'flex flex-col flex-1 gap-0 p-4 bg-white text-garlic-800 rounded-lg border border-solid border-stone-300 relative'
			)}>
			<img
				loading="lazy"
				src="/PathCardBg.png"
				alt="Pricing plan"
				className="gap-0 w-full aspect-[1.37] absolute top-0 right-0"
			/>
			<div className="flex z-10 flex-col gap-5 pb-20 mx-4 mt-0 max-md:mx-2.5">
				<div className="flex flex-col gap-5 leading-[142%]">
					<div className="flex flex-col gap-3 font-semibold">
						<div className="justify-center text-sm tracking-normal whitespace-nowrap text-stone-800">
							{plan.planName}
						</div>
						<div className="pb-3 mt-3 text-2xl tracking-tight text-zinc-600">
							<span className="text-stone-800">
								{plan.price[selectedOption].currency}{' '}
								{plan.price[selectedOption].amount}
							</span>{' '}
							<span className="text-sm tracking-normal leading-5 text-zinc-600">
								/month
							</span>
						</div>
					</div>
					<button className="justify-center items-center px-5 py-3 mt-6 text-sm font-medium tracking-normal rounded-lg bg-stone-100 text-stone-400 hover:bg-[#943DEC] hover:text-garlic-300">
						{plan.planName == 'Free' ? (
							'Start For Free'
						) : (
							<p>{'Choose this plan  >'}</p>
						)}
					</button>
				</div>
				<div className="flex flex-col gap-5 mt-5 mb-20 max-md:mb-10">
					<div className="flex flex-col gap-0 justify-center">
						<hr className="shrink-0 gap-0 h-px bg-gray-200" />
					</div>
					<Select
						selectedOption={selectedOption}
						setSelectedOption={setSelectedOption}
					/>
					<div className="flex flex-col gap-4 justify-center">
						<div className="flex flex-col gap-8">
							{plan.features.map((feature, index) => (
								<FeatureItem
									key={index}
									text={feature.text}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const FeatureItem = ({text}) => (
	<div className="flex gap-2">
		<CheckIcon />
		<div className="flex-1 gap-0">{text}</div>
	</div>
);

const Select = ({selectedOption, setSelectedOption}) => {
	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div>
			<label
				htmlFor="ordinary-select"
				className="block font-medium text-gray-700">
				Select an option:
			</label>
			<select
				id="or-select"
				name="or-select"
				value={selectedOption}
				onChange={handleChange}
				className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
				<option value={1200}>1200 min</option>
				<option value={1400}>1400 min</option>
				<option value={1600}>1600 min</option>
				<option value={1800}>1800 min</option>
			</select>
		</div>
	);
};
const CheckIcon = () => (
	<svg
		width="24px"
		height="24px"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z"
			fill="#080341"
		/>
	</svg>
);
