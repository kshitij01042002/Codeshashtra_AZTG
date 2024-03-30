import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import ReactLoading from "react-loading";
import axios from "axios";
import DiseaseForm from "components/DiseaseForm";
import CardBarChart from "components/Cards/CardBarChart";
import DiseaseBarchart from "components/Cards/DiseaseBarchart";
import CropBarchart from "components/Cards/CropBarchart";
import ReactAudioPlayer from "react-audio-player";
import CardTable from "components/Cards/CardTable.js";

export default function Dashboard() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);
  const [loandata, setLoandata] = useState([]);

  const [formData, setFormData] = useState({
    B: 0,
    L: 0,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [output, setOutput] = useState(null);
  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    console.log(formData);
    let data = null;

    await axios
      .post("http://192.168.189.180:5000/finance", {
        B: Number(formData.B),
        L: Number(formData.L),
      })
      .then(function (response) {
        setIsDisabled(false);
        setIsLoading(false);
        data = response.data;
        console.log(data);
        setOutput(data);
        console.log(output);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormData({
      B: 0,
      L: 0,
    });
  };

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
    <Admin title="FINANCE MANAGEMENT" headerText="State/UT-wise Amount of Farm Loans Waived by States">
      <div>
      
        <h2>State/UT-wise Farm FINANCE MANAGEMENT</h2>
      <ReactAudioPlayer src="/finance.mp3" controls/>   
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            marginTop: "20px", // Adjusted margin for mobile
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
          <tbody>
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
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2"> {/* Adjusted grid layout for mobile */}
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="B"
              >
                Budget
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="B"
                type="number"
                placeholder="ENTER YOUR BUDGET "
                name="B"
                required
                min="500"
                onChange={handleChange}
                value={formData.B}
              />
            </div>

            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="L"
              >
                Loan 
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="L"
                type="number"
                placeholder="ENTER LOAN AMOUNT"
                name="L"
                required
                min="0"
                onChange={handleChange}
                value={formData.L}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isDisabled}
              className="w-full md:w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
            >
              {isLoading ? (
                <ReactLoading
                  type="bars"
                  color="#ffffff"
                  height={25}
                  width={25}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>

          {output ? (
            <div className="mt-2 p-4 mb-4 text-sm rounded-lg" role="alert">
              <pre className="whitespace-pre-wrap break-words">{output}</pre>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp" />
            </div>
          )}
        </form>
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
