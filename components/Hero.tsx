import React from 'react';
import StarSvg from './assets/star';
import NetworkSvg from './Network';
import Image from 'next/image';
import NetworkMobile from './NetworMobile';

function Hero() {
	return (
		<>
			<div className="flex gap-6 flex-col md:flex-row mt-10 md:mt-0">
				<div className="flex-1 flex flex-col gap-5 md:pb-30">
					<h1 className="text-4xl text-center md:text-left md:text-[58px] font-semibold leading-[100%]">
						Thousands of traders trust Hashstack
					</h1>
					<p className="text-center md:text-left text-sm md:text-[22px] text-neutral-400 mb-3">
						To unlock up to{' '}
						<span className="relative font-bold text-[#1A62F6]">
							500%
							<span className="absolute -top-3 md:-top-1">
								<StarSvg />
							</span>
						</span>{' '}
						of their collateral <br /> for trading and yield farming
					</p>
					<div className="hidden md:block">
						<NetworkSvg />
					</div>
					<div className="flex justify-center md:hidden">
						<NetworkMobile />
					</div>
				</div>

				<div className="flex-1 relative h-auto w-full hidden md:block">
					<Image
						src="/hero-image.svg"
						alt="hero-image"
						fill
						draggable={false}
					/>
				</div>
			</div>
			<div className="flex w-full items-center">
				<div className="relative h-[250px] w-[90vw]  -mb-6 block md:hidden">
					<Image
						src="/hero-image.svg"
						alt="hero-image"
						fill
						draggable={false}
						objectPosition="bottom"
					/>
				</div>
			</div>
		</>
	);
}

export default Hero;
