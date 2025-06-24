'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Markets from '@/components/Markets';
import React from 'react';

function page() {
	return (
		<div className="w-screen">
			<main className="max-w-max-w mx-auto min-h-screen flex flex-col relative">
				<Header />
				<div className="flex-1 flex flex-col md:justify-center gap-6 md:gap-0 px-4 md:px-5">
					<Hero />
					<Markets />
				</div>
				<Footer />
			</main>
		</div>
	);
}

export default page;
