
"use client";
// import { Manrope } from 'next/font/google'
// import { Libre_Franklin } from 'next/font/google'

// manrope({
//   subsets: ['latin'],
//   display: 'swap',
// })

// libre_franklin({
//   subsets: ['latin'],
//   display: 'swap',
// })

// To read more about using these font, please visit the Next.js documentation:
// - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// **/
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {useRouter} from 'next/navigation'
import instance from "@/api/axios";
// import { ResponsiveBar } from "@nivo/bar"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps, use } from "react";
import Custom_Chart from "@/app/component/Custom_Chart";
import { set } from "react-hook-form";
import NavigationBar from "../../../components/Navbar";

export function Dashboard() {
  const router = useRouter()
  const [UpcomingTestdata, setUpcomingTestdata] = useState([]);
  const [RecentTestsdata, setRecentTestsdata] = useState({}); 
  const [OverallPerformancedata, setOverallPerformancedata] = useState({});
  const [test, setTest] = useState(false); // [test, setTest

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  function convertUTCDateToLocalDate(date: any) {
    var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
    return newDate;   
}

  const getUpcomingTest = async () => {
    try {
      const res = await instance({
        url: `/user/getSlots/${localStorage.getItem("division")}`,
        method: "GET",
      });
      setUpcomingTestdata(res.data.slots);
      console.log(res,"upcoming test data");
    } catch (error) {
      console.error(error);
    }
  };
  const getRecentTests = async () => {
    try {
      const res = await instance({
        url: `/user/ShowAllHistory`,
        method: "GET",
      });
      setRecentTestsdata(res.data);
      console.log(res,"recent test data");
    } catch (error) {
      console.error(error);
    }
  }
  const getOverallPerformance = async () => {
    try {
      const res = await instance({
        url: `/user/OverAllPerformance`,
        method: "GET",
      });
      console.log(res);
      setOverallPerformancedata(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUpcomingTest();
    getRecentTests();
    getOverallPerformance();
  }, []);

  return (
    <>
    <NavigationBar />
      <Card className="my-2">
        <CardHeader className="flex items-center gap-4">
          <CardTitle>Upcoming Test</CardTitle>
          <Link
            className="flex gap-1 text-xs underline md:text-sm md:gap-2"
            href="#"
          >
            View Details
            <ArrowRightIcon className="w-4 h-4 translate-y-1" />
          </Link>
        </CardHeader>
        {UpcomingTestdata.map((test,index) => (
          <UTest key={index} title={test.slot_name} time={formatter.format((new Date(test.start_time)))} id={test.slot_id}/>
        ))}

      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <CardTitle>Overall Performance</CardTitle>
            <Link
              className="flex gap-1 text-xs underline md:text-sm md:gap-2"
              href="#"
            >
              View Details
              <ArrowRightIcon className="w-4 h-4 translate-y-1" />
            </Link>
          </CardHeader>
          <CardContent>
            {/* <BarChart className="w-full aspect-[1/1] text-purple-400" /> */}
            <Custom_Chart
              title="Test 1"
              marks_obtained={(OverallPerformancedata.Average_Score)?OverallPerformancedata.Average_Score:0}
              total_marks={100}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <CardTitle>Previous Test</CardTitle>
            <Link
              className="flex gap-1 text-xs underline md:text-sm md:gap-2"
              href="#"
            >
              View Details
              <ArrowRightIcon className="w-4 h-4 translate-y-1" />
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Test</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <Tdata title="Test 1" score="80" time="10:00 AM" />
                <Tdata title="Test 2" score="70" time="11:00 AM" />
                <Tdata title="Test 3" score="60" time="12:00 PM" />
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function UTest({ title, time,id }) {
  return (
    <CardContent className="flex items-center justify-between flex-col gap-6 md:flex-row md:items-start md:gap-10">
      <div className="grid gap-2">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-gray-500 dark:text-gray-400">{time}</div>
      </div>
      <div className="flex items-end gap-4">
        <Link href={`/tests/${id}`}><Button size="lg" className="bg-purple-600 rounded-sm text-white" >Start Test</Button></Link>
      </div>
    </CardContent>
  );
}
function Tdata({ title, score, time }) {
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{score}</TableCell>
      <TableCell>{time}</TableCell>
    </TableRow>
  );
}