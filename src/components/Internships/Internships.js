import React from "react";
import InternshipsCard from "./InternshipsCard/InternshipsCard";
function Internships() {
  return (
    <>
      <div className="InternshipsWrapper" id="internships">
        <div className="Container">
        <br/><hr style={{ height: '4px',borderColor: 'darkgray',background: 'darkgray'  }}/><br/>
          <div className="SectionTitle">Internships</div>
          <InternshipsCard />
        </div>
      </div>
    </>
  );
}

export default Internships;
