import React, {useState} from 'react';
import {cn} from '../../utils/cn';
import {AnimatePresence, motion} from 'framer-motion';

const FeatureTable = () => {
	const [featureOpen, setFeatureOpen] = useState(false);

	const categories = [
		{
			name: 'Core',
			features: [
				{
					name: 'Feature 1',
					remarks: {
						Free: 'Remark 1',
						Essential: 'Remark 2',
						Growth: 'Remark 3',
						Custom: 'Remark 4',
					},
				},
				{
					name: 'Feature 2',
					remarks: {
						Free: 'Remark 5',
						Essential: 'Remark 6',
						Growth: 'Remark 7',
						Custom: 'Remark 8',
					},
				},
				{
					name: 'Feature 3',
					remarks: {
						Free: 'Remark 9',
						Essential: 'Remark 10',
						Growth: 'Remark 11',
						Custom: 'Remark 12',
					},
				},
				{
					name: 'Feature 4',
					remarks: {
						Free: 'Remark 13',
						Essential: 'Remark 14',
						Growth: 'Remark 15',
						Custom: 'Remark 16',
					},
				},
			],
		},
		{
			name: 'BrandKit',
			features: [
				{
					name: 'Feature 5',
					remarks: {
						Free: 'Remark 17',
						Essential: 'Remark 18',
						Growth: 'Remark 19',
						Custom: 'Remark 20',
					},
				},
				{
					name: 'Feature 6',
					remarks: {
						Free: 'Remark 21',
						Essential: 'Remark 22',
						Growth: 'Remark 23',
						Custom: 'Remark 24',
					},
				},
				{
					name: 'Feature 7',
					remarks: {
						Free: 'Remark 25',
						Essential: 'Remark 26',
						Growth: 'Remark 27',
						Custom: 'Remark 28',
					},
				},
				{
					name: 'Feature 8',
					remarks: {
						Free: 'Remark 29',
						Essential: 'Remark 30',
						Growth: 'Remark 31',
						Custom: 'Remark 32',
					},
				},
			],
		},
		{
			name: 'Social',
			features: [
				{
					name: 'Feature 5',
					remarks: {
						Free: 'Remark 17',
						Essential: 'Remark 18',
						Growth: 'Remark 19',
						Custom: 'Remark 20',
					},
				},
				{
					name: 'Feature 6',
					remarks: {
						Free: 'Remark 21',
						Essential: 'Remark 22',
						Growth: 'Remark 23',
						Custom: 'Remark 24',
					},
				},
				{
					name: 'Feature 7',
					remarks: {
						Free: 'Remark 25',
						Essential: 'Remark 26',
						Growth: 'Remark 27',
						Custom: 'Remark 28',
					},
				},
				{
					name: 'Feature 8',
					remarks: {
						Free: 'Remark 29',
						Essential: 'Remark 30',
						Growth: 'Remark 31',
						Custom: 'Remark 32',
					},
				},
			],
		},
		{
			name: 'MetaData',
			features: [
				{
					name: 'Feature 5',
					remarks: {
						Free: 'Remark 17',
						Essential: 'Remark 18',
						Growth: 'Remark 19',
						Custom: 'Remark 20',
					},
				},
				{
					name: 'Feature 6',
					remarks: {
						Free: 'Remark 21',
						Essential: 'Remark 22',
						Growth: 'Remark 23',
						Custom: 'Remark 24',
					},
				},
				{
					name: 'Feature 7',
					remarks: {
						Free: 'Remark 25',
						Essential: 'Remark 26',
						Growth: 'Remark 27',
						Custom: 'Remark 28',
					},
				},
				{
					name: 'Feature 8',
					remarks: {
						Free: 'Remark 29',
						Essential: 'Remark 30',
						Growth: 'Remark 31',
						Custom: 'Remark 32',
					},
				},
			],
		},
	];

	return (
		<div className="flex flex-col w-full px-[10%] items-center my-12 m gap-6">
			<button
				className="flex items-center text-[#252521] px-5 py-3 border border-garlic-300 text-sm font-medium self-center"
				onClick={() => setFeatureOpen(!featureOpen)}>
				View all featues
				<span
					className={cn(
						'ml-2 transition-transform duration-500',
						featureOpen ? '-rotate-180' : ''
					)}>
					<Chevron />
				</span>
			</button>

			<AnimatePresence mode="wait">
				{featureOpen && <FeatureComparisonAccordion categories={categories} />}
			</AnimatePresence>
		</div>
	);
};

const Chevron = () => (
	<svg
		width="30px"
		height="30px"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M17 9.5L12 14.5L7 9.5"
			stroke="#000000"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const FeatureComparisonAccordion = ({categories}) => {
	const [selectedOptions, setSelectedOptions] = useState({});

	const plans = ['Free', 'Essential', 'Growth', 'Custom'];

	const handleOptionChange = (plan, feature, value) => {
		setSelectedOptions({
			...selectedOptions,
			[plan]: {
				...selectedOptions[plan],
				[feature]: value,
			},
		});
	};

	return (
		<motion.div
			initial={{opacity: 0, y: -20}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: -20}}
			transition={{duration: 0.4}}
			className="border bg-blackColor bg-opacity-80 w-full">
			<div className="grid grid-cols-5 px-4 py-2 bg-white text-black">
				<p className="px-4 py-4 font-medium">Features</p>
				{plans.map((plan) => (
					<p className="px-4 py-4 font-medium">{plan}</p>
				))}
			</div>
			{categories.map((category, index) => (
				<AccordionItem
					key={index}
					category={category}
					selectedOptions={selectedOptions}
					handleOptionChange={handleOptionChange}
				/>
			))}
		</motion.div>
	);
};

const AccordionItem = ({category}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-full bg-white text-black">
			<div
				className="flex w-full justify-between items-center px-4 py-6 cursor-pointer"
				onClick={toggleAccordion}>
				<div className="text-xl font-medium">{category.name}</div>
				<svg
					className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M19 9l-7 7-7-7" />
				</svg>
			</div>
			{isOpen && (
				<table className="w-full border border-garlic-300">
					<FeatureDropdowns category={category} />
				</table>
			)}
		</div>
	);
};

const FeatureDropdowns = ({category}) => {
	const plans = ['Free', 'Essential', 'Growth', 'Custom'];

	return (
		<tbody className="">
			{category.features.map((feature, index) => (
				<tr
					className="even:bg-garlic-100"
					key={index}>
					<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
						{feature.name}
					</td>
					{plans.map((plan, idx) => (
						<td
							key={idx}
							className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							{feature.remarks[plan]}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default FeatureTable;
