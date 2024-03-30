import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import DiseaseForm from "components/DiseaseForm";
import CardBarChart from "components/Cards/CardBarChart";
import DiseaseBarchart from "components/Cards/DiseaseBarchart";
import CropBarchart from "components/Cards/CropBarchart";

export default function Dashboard() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);
  const [loandata, setLoandata] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.data.gov.in/resource/d7215e89-edc3-41ca-83bb-ce6fcc2be65a?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoandata(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin title="LOAN WAIVER DATA" headerText="State/UT-wise Amount of Farm Loans Waived by States">
      <div>
        <h2>State/UT-wise Farm Loan Waiver Data</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            marginTop: "100px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f2f2f2",
                borderBottom: "1px solid #ddd",
              }}
            >
              <th style={{ padding: "10px" }}>S.No</th>
              <th style={{ padding: "10px" }}>State/UT</th>
              <th style={{ padding: "10px" }}>Debt Waiver Scheme</th>
              <th style={{ padding: "10px" }}>Amount Waived (Rs. crore)</th>
            </tr>
          </thead>
          <tbody
            style={{
              zIndex: 1,
              position: "relative",
            }}
          >
            {loandata.records.map((item, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{item.s_no}</td>
                <td style={{ padding: "10px" }}>{item.state_ut}</td>
                <td style={{ padding: "10px" }}>
                  {item.name_of_the_debt_waiver_scheme_since_2014}
                </td>
                <td style={{ padding: "10px" }}>
                  {item.actual_amount_waived__rs__crore_}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;

  return {
    props: {
      session,
      userId,
    },
  };
}

