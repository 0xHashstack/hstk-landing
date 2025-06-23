import * as React from 'react';
const StarSvg = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={12}
		height={12}
		fill="none"
		{...props}
	>
		<g
			stroke="#1A62F6"
			strokeLinecap="round"
			strokeLinejoin="round"
			clipPath="url(#a)"
		>
			<path
				fill="#1A62F6"
				d="M4.7 7.749a1.015 1.015 0 0 0-.246-.458.935.935 0 0 0-.433-.26l-2.902-.792a.237.237 0 0 1-.124-.09.26.26 0 0 1 0-.3.237.237 0 0 1 .124-.09l2.902-.792a.935.935 0 0 0 .433-.26c.12-.127.204-.285.247-.458l.748-3.067a.25.25 0 0 1 .085-.131.228.228 0 0 1 .286 0 .25.25 0 0 1 .085.131l.748 3.067c.042.173.127.331.247.458.12.126.269.216.432.26l2.903.791c.05.015.094.046.125.09a.26.26 0 0 1 0 .302.236.236 0 0 1-.125.09l-2.903.79a.935.935 0 0 0-.432.261c-.12.127-.205.285-.247.458l-.749 3.067a.251.251 0 0 1-.085.131.229.229 0 0 1-.285 0 .251.251 0 0 1-.085-.131L4.7 7.749Z"
			/>
			<path strokeWidth={0.9} d="M9.461 1.5v2M10.408 2.5H8.514" />
			<path strokeWidth={0.5} d="M1.892 8.498v1M2.365 8.999H1.42" />
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h11.354v11.998H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default StarSvg;
