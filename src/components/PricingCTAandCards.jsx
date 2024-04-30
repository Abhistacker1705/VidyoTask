import React, {useEffect, useState} from 'react';
import {Tabs} from './ui/tabs';
import {Card, CustomCard} from './ui/Cards';
import {PlansPricing, CustomPricing} from '../datas/CardData';

const PricingCTAandCards = () => {
	const [clips, setClips] = useState(50);
	const [clipsToggled, setClipsToggled] = useState(false);

	const handleClipsChange = (value) => {
		const color = value > 185 ? true : false;
		setClipsToggled(color);
	};

	const tabs = [
		{
			title: (
				<div className="flex items-center gap-2">
					<h2>Monthly</h2>
				</div>
			),
			value: 'monthly',
			content: (
				<div className="flex gap-6 max-lg:flex-col">
					{PlansPricing.map((plan) => (
						<Card
							key={plan.planName}
							plan={plan}
							clips={clips}
							clipsToggled={clipsToggled}
						/>
					))}
					<CustomCard
						plan={CustomPricing}
						clips={clips}
						clipsToggled={clipsToggled}
					/>
				</div>
			),
		},
		{
			title: (
				<div className="flex items-center gap-2">
					<h2>Yearly</h2>
					<div className="bg-lime text-black p-1 rounded-full">
						<p className="text-xs">Upto 51% off</p>
					</div>
				</div>
			),
			value: 'yearly',

			content: (
				<div className="flex gap-6 max-lg:flex-col">
					{PlansPricing.map((plan) => (
						<Card
							key={plan.planName}
							plan={plan}
							clips={clips}
							clipsToggled={clipsToggled}
						/>
					))}
					<CustomCard
						plan={CustomPricing}
						clipsToggled={clipsToggled}
					/>
				</div>
			),
			clips,
		},
	];

	return (
		<div className="flex flex-col px-[10%] items-center mt-12 gap-6">
			<PrincingCTAHeader />
			<Tabs
				tabs={tabs}
				clips={clips}
				setClips={setClips}
				clipsToggled={clipsToggled}
				handleClipsChange={handleClipsChange}
			/>
		</div>
	);
};

const PrincingCTAHeader = () => (
	<>
		<h1 className="text-6xl text-center text-grease text-opacity-70 font-bold wix-madefor-display">
			Save 10x time & effort with us
		</h1>
		<p className="text-sm text-center text-garlic-700">
			Pay only for upload minutes. Download unlimited videos.
		</p>
	</>
);

export default PricingCTAandCards;
