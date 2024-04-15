import { Chart as ReactChartjsChart, Doughnut } from "react-chartjs-2";
interface ChartProps {
  title: string;
  marks_obtained: number;
  total_marks: number;
}

const Custom_Chart = ({ title, marks_obtained, total_marks }: ChartProps) => {
  const performancePercentage = (marks_obtained * 100) / total_marks; // Example student performance percentage
  const remainingPercentage = 100 - performancePercentage;
  const data: number[] = [performancePercentage, remainingPercentage];
  return (
    <>
      <h1 className="mx-auto ">{title}</h1>
      <Doughnut
        className="mx-auto "
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
    </>
  );
};

export default Custom_Chart;
