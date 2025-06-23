import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

function Header() {
	const handleOpenApp = () => {
		window.location.href = 'https://app.hashstack.finance/';
	};
	return (
		<div className="w-full flex items-center justify-between py-6 sticky top-0">
			<div className="flex items-center gap-2">
				<Image width={26} height={26} src="/logo.svg" alt="logo" />
				<p className="text-[20px] font-medium">Hashstack</p>
			</div>
			<Button
				className="flex gap-2 items-center cursor-pointer !px-4"
				onClick={handleOpenApp}
			>
				Go To App
				<ArrowUpRight />
			</Button>
		</div>
	);
}

export default Header;
