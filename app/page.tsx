'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function page() {
	return (
		<div className="w-screen px-5">
			<main className="max-w-max-w mx-auto min-h-screen flex flex-col relative">
				<Header />
				<div className="flex-1"></div>
				<Footer />
			</main>
		</div>
	);
}

export default page;
