'use client';

import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {cn} from '../../../utils/cn';

type Tab = {
	title: string | React.ReactNode | any;
	value: string;
	content?: string | React.ReactNode | any;
};

export const Tabs = ({
	tabs: propTabs,
	clips,
	setClips,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	clips: number;
	setClips: any;

	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (tab: Tab) => {
		setActive(tab);
	};

	return (
		<div className="flex flex-col w-full items-center gap-6">
			<div
				className={cn(
					'flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-fit p-1 rounded-full w-full bg-garlic-300',
					containerClassName
				)}>
				{propTabs.map((tab, idx) => (
					<button
						key={tab.value}
						onClick={() => {
							moveSelectedTabToTop(tab);
						}}
						className={cn('relative px-4 py-3 rounded-full', tabClassName)}>
						{active.value === tab.value && (
							<motion.div
								layoutId="clickedbutton"
								transition={{type: 'spring', bounce: 0.3, duration: 0.6}}
								className={cn(
									'absolute inset-0 bg-white rounded-full ',
									activeTabClassName
								)}
							/>
						)}

						<span className="relative block text-black">{tab.title}</span>
					</button>
				))}
			</div>
			<ClipsToggle
				clips={clips}
				setClips={setClips}
			/>

			<FadeInDiv
				active={active}
				key={clips}
				className={cn('mt-32', contentClassName)}
			/>
		</div>
	);
};

export const FadeInDiv = ({
	className,
	active,
}: {
	className?: string;
	key?: string | number | Boolean;
	active: Tab;
}) => {
	return (
		<div className="w-full h-full">
			<AnimatePresence>
				<motion.div
					key={active.value}
					initial={false}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{duration: 0.4}}
					className={cn('w-full h-full top-0 left-0', className)}>
					{active.content}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

const ClipsToggle = ({clips, setClips}) => {
	return (
		<div className="flex w-full justify-between items-center gap-4 max-md:flex-col">
			<p className="text-xl text-center font-medium">
				Suggesting an ideal plan for producing around{' '}
				<span className="text-[#943DEC]">{clips} clips</span> monthly
			</p>

			<div className="flex w-[60%] justify-center items-center gap-4">
				<p>{50}</p>
				<input
					className="rounded-lg appearance-none bg-garlic-400 h-4 w-[60%] accent-red"
					type="range"
					min={50}
					max={200}
					value={clips}
					id="myRange"
					onChange={(e) => {
						setClips(e.target.value);
					}}
				/>
				<p>{'200+'}</p>
			</div>
		</div>
	);
};
