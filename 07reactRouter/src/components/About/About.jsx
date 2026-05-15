import React from 'react'


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.pinimg.com/736x/81/40/db/8140db7aa4f4806be47909012e1628a5.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl underline">
                            पार्थ-सारथी: रणभूमि का महासंवाद
                        </h2>
                        <p className="mt-6 text-gray-600">
                            On the battlefield of Kurukshetra, Krishna serves as Arjun’s charioteer, 
                            guiding him through a profound crisis of duty and emotion. 
                            When Arjun collapses in despair upon seeing his relatives on the opposing side,
                             Krishna imparts the timeless wisdom of the Bhagavad Gita to revive his spirit. 
                             He reveals his cosmic form, the Vishwaroopam, proving that time has already decided the fate of 
                             the warriors and that Arjun is merely a divine instrument. 
                             Throughout the fierce battle, Krishna expertly maneuvers their chariot, shielding Arjun
                              from fatal weapons like Karna’s Nagastra through sheer tactical brilliance.
                              Ultimately, their bond represents the perfect union of human effort and divine grace, 
                            showing that righteousness always triumphs under divine guidance
                        </p>
                        <p className="mt-4 text-gray-600">
                            The bond between Krishna and Arjun proves that human effort aligned with
                             divine wisdom can overcome any existential crisis. Ultimately, 
                            their battlefield partnership symbolizes that righteousness always triumphs 
                            when guided by a higher consciousness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}