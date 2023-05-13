import React from 'react';
import Image from 'next/image';

function Propuesta() {
  return (
    <div className="mt-16 flex border-t border-slate-200 sm:space-x-10 md:grid md:grid-cols-4 md:gap-x-8 md:space-x-0">
      <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-indigo-500">
        <Image width={100} height={100} src="/growth-icon.png" alt="Growth" />
        <h3>Growth</h3>
        <p>We provide access to Fortune 500 companies across the globe.</p>
      </div>
      <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400">
        <Image width={100} height={100} src="/investment-icon.png" alt="Investment" />
        <h3>Investment</h3>
        <p>Our investments range from Seed to Series A (btw USD 500K to 1M).</p>
      </div>
      <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400">
        <Image width={100} height={100} src="/network-icon.png" alt="Network" />
        <h3>Network</h3>
        <p>You access like minded entrepreneurs and can use Globant offices. Yes, locations in +40 cities in +20 countries are open to you.</p>
      </div>
      <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400">
        <Image width={100} height={100} src="/mentoring-icon.png" alt="Mentoring" />
        <h3>Mentoring</h3>
        <p>Partner with Globant subject matter experts from business hacking to branding and specialists from our strategic alliances to help accelerate your growth.</p>
      </div>
    </div>
  );
}

export default Propuesta;
