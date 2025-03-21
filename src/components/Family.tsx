import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Family = () => {
  const familyMembers = [
    {
      name: "Lois Griffin",
      relation: "Wife",
      description: "Peter's patient and level-headed wife, though she occasionally shows traits of recklessness and poor judgment similar to Peter's.",
      initial: "LG"
    },
    {
      name: "Chris Griffin",
      relation: "Son",
      description: "Peter's teenage son who shares many of his father's personality traits including low intelligence and awkward social skills.",
      initial: "CG"
    },
    {
      name: "Meg Griffin",
      relation: "Daughter",
      description: "Peter's frequently neglected teenage daughter who is often bullied by her family, especially Peter.",
      initial: "MG"
    },
    {
      name: "Stewie Griffin",
      relation: "Baby Son",
      description: "Peter's infant son with an adult-like intelligence and a sophisticated British accent, often plotting to kill Lois or take over the world.",
      initial: "SG"
    },
    {
      name: "Brian Griffin",
      relation: "Family Dog",
      description: "The Griffin family's anthropomorphic pet dog who can talk. An intellectual and sophisticated character who often serves as the voice of reason.",
      initial: "BG"
    }
  ];

  return (
    <section id="family" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-family-guy text-blue-400">
          The Griffin Family
        </h2>

        <div className="text-center mb-12">
          <div className="relative w-full max-w-2xl h-[250px] mx-auto mb-6 bg-gray-900 rounded-xl p-4">
            <Image
              src="/images/griffin-family.png"
              alt="The Griffin Family"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Peter Griffin is the patriarch of the dysfunctional Griffin family,
            which resides in the fictional town of Quahog, Rhode Island.
            Here are the members of his immediate family:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyMembers.map((member, index) => (
            <Card key={index} className="family-guy-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12 bg-blue-600">
                    <AvatarFallback>{member.initial}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-xl text-white">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.relation}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Family;
