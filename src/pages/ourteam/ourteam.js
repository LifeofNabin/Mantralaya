import React from 'react';
import TeamCard from '../../components/teamcard';
import './ourteam.css';

const members = [
  { name: 'Nabin Dhamala', title: 'FullStack Developer', image: '/assets/images/member/member1.jpeg' },
  { name: 'Khakendra Baduwal', title: 'Back End Developer', image: '/assets/images/member/member3.jpeg' },
  { name: 'Mohit Khadayat', title: 'Front End Developer', image: '/assets/images/member/member2.jpeg' },
  { name: 'Dinesh Dhamala', title: 'QA Engineer', image: '/assets/images/member/member4.jpg' },
];

export default function OurTeam() {
  return (
    <section className="ourteam">
      <div className="intro">
        <h2>🌟 No need to wonder, we have wonderful people working with us</h2>
        <div className="pillars">
          <div className="pillar">
            <h4>✅ The Right People</h4>
            <p>Skilled, passionate and driven to solve real-world problems.</p>
          </div>
          <div className="pillar">
            <h4>✅ The Right Team</h4>
            <p>We complement each other's strengths and grow together.</p>
          </div>
          <div className="pillar">
            <h4>✅ The Right Place</h4>
            <p>Our workspace thrives on creativity, collaboration, and innovation.</p>
          </div>
          <div className="pillar">
            <h4>✅ The Right Time</h4>
            <p>We deliver on-time without compromising quality.</p>
          </div>
        </div>
      </div>

      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <TeamCard key={i} {...m} />
        ))}
      </div>
    </section>
  );
}
