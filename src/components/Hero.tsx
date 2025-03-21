'use client';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center text-center pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-family-guy text-shadow">
          Peter Griffin
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          The hilarious, lovable, and occasionally offensive patriarch of the Griffin family
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent text-white border-white hover:bg-white/10"
            onClick={() => document.getElementById('quotes')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Quotes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
