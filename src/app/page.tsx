"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Chart, registerables } from "chart.js"; // Import registerables
import { Chart as ReactChartjsChart, Doughnut } from "react-chartjs-2";
import Custom_Chart from "../../src/app/component/Chart";

Chart.register(...registerables); // Register Chart.js components

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const performancePercentage = 80; // Example student performance percentage
  const remainingPercentage = 100 - performancePercentage;
  const data: number[] = [performancePercentage, remainingPercentage];

  return (
    <>
      <Navbar />
      <div className="flex flex-row my-8 mx-6 justify-center gap-2 h-screen">
        <div className="w-1/5 flex flex-col rounded-lg mx-auto h-screen my-auto ring-2 ring-purple-600 hover:bg-gray-950">
          <h1 className="text-white text-5xl py-4 text-center">
            Upcoming Test
          </h1>
          <div className="flex flex-col py-2  gap-y-1 px-8">
            <h1 className="text-white text-xl  text-left">Physics</h1>
            <h1 className="text-white text-xl  text-left">Date: 12/12/2023</h1>
            <h1 className="text-white text-xl text-left">Time: 10:00 AM</h1>
            <Link href="/test">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Start Test
              </button>
            </Link>
          </div>
        </div>
        <div className="w-3/5 rounded-lg mx-auto h-screen my-auto ring-2 ring-purple-600 hover:bg-gray-950">
          <h1 className="text-white text-5xl py-4 text-center">
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
          <h2 className="text-white text-3xl py-4 text-left ml-16">
            Total Test Taken: 10
          </h2>
          <h2 className="text-white text-3xl py-4 text-left ml-16">
            Average score: 80
          </h2>
          <h2 className="text-white text-3xl py-4 text-left ml-16">
            Average time taken: 30 minutes
          </h2>
        </div>
        <div className="w-1/5 flex flex-col py-2 px-12 rounded-lg mx-auto my-auto ring-2 h-screen ring-purple-600 hover:bg-gray-950">
          <h1 className="text-white text-5xl py-2 text-center">Recent Tests</h1>
          <Custom_Chart title="Test 1" marks_obtained={80} total_marks={100} />
          <Custom_Chart title="Test 2" marks_obtained={100} total_marks={100} />
          <Custom_Chart title="Test 3" marks_obtained={40} total_marks={100} />
        </div>
      </div>
    </>
  );
};

export default Home;
