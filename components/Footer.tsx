import {
	DiscordLogoIcon,
	GithubLogoIcon,
	XLogoIcon,
	YoutubeLogoIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

const LeftLinks = [
	{
		name: 'Developers',
		href: 'https://docs.hashstack.finance/developers',
	},
	{
		name: 'Documentation',
		href: 'https://docs.hashstack.finance/hub',
	},
	{
		name: 'Community',
		href: 'https://hashstack.community',
	},
];

const RightLinks = [
	{
		icon: DiscordLogoIcon,
		href: 'https://hashstack.community',
	},
	{
		icon: XLogoIcon,
		href: 'https://x.com/0xhashstack',
	},
	{
		icon: GithubLogoIcon,
		href: 'https://github.com/0xHashstack/',
	},
	{
		icon: YoutubeLogoIcon,
		href: 'https://www.youtube.com/@hashstack',
	},
];
function Footer() {
	return (
		<div className="flex items-center  justify-between py-6">
			<div className="flex items-center gap-6">
				{LeftLinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						target="_blank"
						className="text-sm text-neutral-400"
					>
						{link.name}
					</Link>
				))}
			</div>
			<div className="flex items-center gap-4">
				{RightLinks.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						target="_blank"
						className="text-sm text-black"
					>
						<div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
							<link.icon size={16} />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Footer;
