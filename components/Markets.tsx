import { ArrowDownIcon } from '@phosphor-icons/react';
import { ArrowUpIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const MarketData = [
	{
		name: 'Bitcoin',
		src: '/icon/bitcoin.svg',
	},
	{
		name: 'Ethereum',
		src: '/icon/eth.svg',
	},
	{
		name: 'USDT',
		src: '/icon/usdt.svg',
	},
	{
		name: 'USDC',
		src: '/icon/usdc.svg',
	},
	{
		name: 'Starknet',
		src: '/icon/starknet.svg',
	},
];

function Markets() {
	return (
		<div className="w-full border border-[#F5F4F4] rounded-2xl flex flex-wrap gap-6 p-6 pb-10 justify-center md:justify-between">
			<div className="flex flex-col gap-6 items-center md:items-start">
				<div className="flex gap-2 items-center">
					<p className="font-medium text-sm">Supply Market</p>
					<div className="w-7 h-7 rounded-full flex items-center justify-center bg-green-100 text-green-400">
						<ArrowDownIcon size={16} />
					</div>
				</div>
				<div className="flex flex-wrap gap-6 justify-center">
					{MarketData.map((item, index) => (
						<div key={index} className="flex items-center gap-2">
							<Image src={item.src} alt={item.name} width={24} height={24} />
							<p className="text-sm">{item.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-6 items-center md:items-start">
				<div className="flex gap-2 items-center">
					<p className="font-medium text-sm">Borrow Market</p>
					<div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-100 text-red-400">
						<ArrowUpIcon size={16} />
					</div>
				</div>
				<div className="flex flex-wrap gap-6 justify-center">
					{MarketData.map((item, index) => (
						<div key={index} className="flex items-center gap-2">
							<Image src={item.src} alt={item.name} width={24} height={24} />
							<p className="text-sm">{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Markets;
