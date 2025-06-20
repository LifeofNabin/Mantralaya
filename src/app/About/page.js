import TeamMember from '@/components/TeamMember';

export default function About() {
  const team = [
    {
      name: "Person 1",
      role: "Co-Founder / CEO",
      bio: "Tech visionary with 10+ years in AI.",
      image: "/team/person1.jpg", // Add images to /public/team/
    },
    // Add 2 more team members
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}