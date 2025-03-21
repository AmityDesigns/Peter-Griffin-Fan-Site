import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-family-guy text-blue-400">
          About Peter Griffin
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Card className="border-none shadow-lg family-guy-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Who is Peter Griffin?</h3>
                <p className="text-gray-300 mb-4">
                  Peter Löwenbräu Griffin Sr. is the main character and protagonist of the American animated sitcom Family Guy.
                  He is voiced by the series creator, Seth MacFarlane, and first appeared on television, along with the rest of the
                  Griffin family, in a 15-minute short on December 20, 1998.
                </p>
                <p className="text-gray-300 mb-4">
                  Peter is a bumbling, clumsy, and foolish but well-intentioned blue-collar worker who lives with his family in the
                  fictional town of Quahog, Rhode Island. He works at the Pawtucket Brewery and is known for his numerous
                  misadventures, outlandish cutaway gags, and offensive jokes.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-1 text-gray-200">Age</h4>
                    <p className="text-gray-300">43</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-1 text-gray-200">Occupation</h4>
                    <p className="text-gray-300">Brewery Worker</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-1 text-gray-200">Hometown</h4>
                    <p className="text-gray-300">Quahog, RI</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-1 text-gray-200">First Appearance</h4>
                    <p className="text-gray-300">1998</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl border-4 border-blue-600 shadow-xl bg-gray-800">
              <Image
                src="/images/peter-griffin-2.png"
                alt="Peter Griffin"
                fill
                style={{objectFit: 'contain'}}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
