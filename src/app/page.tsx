"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Chart, registerables } from "chart.js"; // Import registerables
import { Chart as ReactChartjsChart, Doughnut } from "react-chartjs-2";
import Custom_Chart from "../../src/app/component/Chart";
import axios from "axios";

Chart.register(...registerables); // Register Chart.js components

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  const performancePercentage = 80; // Example student performance percentage
  const remainingPercentage = 100 - performancePercentage;
  const data: number[] = [performancePercentage, remainingPercentage];

  const upcomingTest = useState({});
  const recentTests = useState({});
  const overallPerformance = useState({});



  return (
    <>
      <Navbar />
      <div className="flex flex-row my-8 mx-6 justify-center gap-2 h-screen bg-white text-black">
        <div className="w-1/5 flex flex-col  mx-auto h-screen my-auto  border-spacing-4 hover:bg-gray-150">
          <h1 className=" text-5xl py-4 text-center">
            Upcoming Test
          </h1>
          <div className="flex flex-col py-2  gap-y-1 px-8">
            <h1 className=" text-xl  text-left">Physics</h1>
            <h1 className=" text-xl  text-left">Date: 12/12/2023</h1>
            <h1 className=" text-xl text-left">Time: 10:00 AM</h1>
            <Link href="/test">
              <button className="bg-purple-500 hover:bg-purple-700  font-bold py-2 px-4 rounded">
                Start Test
              </button>
            </Link>
          </div>
        </div>
        <div className="w-3/5  mx-auto h-screen my-auto  hover:bg-gray-100">
          <h1 className=" text-5xl py-4 text-center">
            Overall Performance
          </h1>
          <Doughnut
            className="mx-auto  "
            data={{
              datasets: [
                {
                  data,
                  backgroundColor: ["#9333ea", "#00000"],
                },
              ],
              labels: ["Performance", "Remaining"],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              cutout: "70%",
              circumference: 180,
              rotation: -90,
            }}
          />
          <h2 className=" text-3xl py-4 text-left ml-16">
            Total Test Taken: 10
          </h2>
          <h2 className=" text-3xl py-4 text-left ml-16">
            Average score: 80
          </h2>
          <h2 className=" text-3xl py-4 text-left ml-16">
            Average time taken: 30 minutes
          </h2>
        </div>
        <div className="w-1/5 flex flex-col py-2 px-12 rounded-lg mx-auto my-auto h-screen  border-purple-600 hover:bg-gray-950">
          <h1 className=" text-5xl py-2 text-center">Recent Tests</h1>
          <Custom_Chart title="Test 1" marks_obtained={80} total_marks={100} />
          <Custom_Chart title="Test 2" marks_obtained={100} total_marks={100} />
          <Custom_Chart title="Test 3" marks_obtained={40} total_marks={100} />
        </div>
      </div>
    </>
  );
};

export default Home;
