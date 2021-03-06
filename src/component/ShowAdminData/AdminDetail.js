import React, { useState } from "react";

import { useNavigate } from "react-router";
import "./AdminAllData.css";

const AdminDetail = () => {
  const [admin_detail, setAdmin_detail] = useState(false);
  const redirect2 = useNavigate();
  console.log(setAdmin_detail);

  const s_admin_detail = () => {
    redirect2("/AdminAllData");
    // window.history.replaceState(null, null, "/");
  };

  return (
    <>
      {!admin_detail && (
        <div className="admin_detail">
          <button className="btn btn-success" onClick={s_admin_detail}>
            Admin Detail
          </button>
        </div>
      )}
    </>
  );
};

export default AdminDetail;
