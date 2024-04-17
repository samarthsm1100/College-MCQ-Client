"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Chart, registerables } from "chart.js"; // Import registerables
import { Chart as ReactChartjsChart, Doughnut } from "react-chartjs-2";
import Custom_Chart from "./component/Custom_Chart";
import axios from "axios";
import {redirect} from 'next/navigation'
import instance from "@/api/axios";
import { Button } from "@nextui-org/react";
import { Dashboard } from "@/components/component/dashboard";

Chart.register(...registerables); // Register Chart.js components

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const token = localStorage.getItem("token");
  if(!token){
    redirect('/signin')
  }
  const performancePercentage = 80; // Example student performance percentage
  const remainingPercentage = 100 - performancePercentage;
  const data: number[] = [performancePercentage, remainingPercentage];

  const upcomingTest = useState({});
  const recentTests = useState({});
  const overallPerformance = useState({});
  const getUpcomingTest = async () => {
    try {
      const res = await instance({
        url: `/user/getSlots/${localStorage.getItem("division")}`,
        method: "GET",
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUpcomingTest();
  }, []);

  return (
    <div className="m-4">
      <Dashboard />
    </div>
  );
};

export default Home;
