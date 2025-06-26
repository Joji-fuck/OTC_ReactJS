import React from "react";
import "./StaffPage.css";
import staffData from "../../data/players.json";
import StaffCard from "../../components/staff-card/StaffCard.jsx";

const StaffPage = () => {
  return (
    <section className="staff-page">
      <h1>Организаторы</h1>
      <div className="staff-grid">
          {staffData.staff.map(staff => (
            <StaffCard
              key={staff.id}
              playerId={staff.player_id}
              role={staff.role}
            />
          ))}
      </div>
    </section>
  );
};
export default StaffPage;
