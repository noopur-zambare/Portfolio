import React from "react";
import ExtracurricularCard from "./ExtracurricularCard/ExtracurricularCard";
function Extracurricular() {
  return (
    
    <>
      <div className="ExtracurricularWrapper" id="extracurricular">
        <div className="Container">
          <hr style={{ height: '4px',borderColor: 'darkgray',background: 'darkgray'  }}/><br/>
          <div className="SectionTitle">Extracurricular</div>
          <ExtracurricularCard />
        </div>
      </div>
    </>
  );
}

export default Extracurricular;
