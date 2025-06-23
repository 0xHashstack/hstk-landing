'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Markets from '@/components/Markets';
import React from 'react';

function page() {
	return (
		<div className="w-screen px-5">
			<main className="max-w-max-w mx-auto min-h-screen flex flex-col relative">
				<Header />
				<div className="flex-1 flex flex-col justify-center gap-6 md:gap-0 ">
					<Hero />
					<Markets />
				</div>
				<Footer />
			</main>
		</div>
	);
}

export default page;
