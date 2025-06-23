import React from 'react';
import StarSvg from './assets/star';
import NetworkSvg from './Network';
import Image from 'next/image';

function Hero() {
	return (
		<div className="flex gap-6 flex-col md:flex-row ">
			<div className="flex-1 flex flex-col gap-5">
				<h1 className="text-[58px] font-semibold leading-[100%]">
					Thousands of traders trust Hashstack
				</h1>
				<p className="text-[22px] text-neutral-400 mb-3">
					To unlock up to{' '}
					<span className="relative font-bold text-[#1A62F6]">
						500%
						<span className="absolute">
							<StarSvg />
						</span>
					</span>{' '}
					of their collateral <br /> for trading and yield farming
				</p>

				<NetworkSvg />
			</div>

			<div className="flex-1 relative h-[50vh] hidden md:block">
				<Image src="/hero-image.svg" alt="hero-image" fill draggable={false} />
			</div>
		</div>
	);
}

export default Hero;
