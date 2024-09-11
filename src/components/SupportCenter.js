import React from 'react';
import './SupportCenter.css'; 

const SupportCenter = () => {
  
  const team = [
    {
      name: 'Martin Doe',
      profession: 'Support Specialist',
      image: 'images/team1.png', 
    },
    {
      name: 'Martin Doe',
      profession: 'Support Specialist',
      image: 'images/team2.png',
    },
    {
      name: 'Martin Doe',
      profession: 'Support Specialist',
      image: 'images/team3.png',
    },
    {
      name: 'Martin Doe',
      profession: 'Support Specialist',
      image: 'images/team4.png',
    },
  ];

  return (
    <div className="support-center">
      <h1>Customer <span>Support</span> Center</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet nemo expedita asperiores commodi accusantium.</p>
      <div className="team">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.profession}</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportCenter;