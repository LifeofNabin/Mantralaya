import React from 'react';
import TeamCard from '../../components/teamcard';
import './ourteam.css';

const members = [
  { name: 'Nabin Dhamala', title: 'FullStack Developer', image: 'assets/images/member/member1.jpeg' },
  { name: 'Khakendra Baduwal', title: 'Back End Developer', image: '/assets/images/member/member3.jpeg' },
  { name: 'Mohit Khadayat', title: 'Front End Developer', image: '/assets/images/member/member2.jpeg' },
  { name: 'Dinesh Dhamala', title: 'QA Engineer', image: '/assets/images/member/member4.jpg' },
];

export default function OurTeam() {
  return (
    <section className="ourteam">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <TeamCard key={i} {...m} />
        ))}
      </div>
    </section>
  );
}
