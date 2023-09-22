import { LineChart as LChart,Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
    let studentMarksData = [
        { id: 1, name: "John", physics: 85, chemistry: 90, math: 85 },
        { id: 2, name: "Alice", physics: 92, chemistry: 88, math: 92 },
        { id: 3, name: "Bob", physics: 78, chemistry: 85, math: 78 },
        { id: 4, name: "Eva", physics: 88, chemistry: 90, math: 88 },
        { id: 5, name: "Michael", physics: 95, chemistry: 89, math: 95 },
        { id: 6, name: "Sophia", physics: 75, chemistry: 78, math: 75 },
        { id: 7, name: "Oliver", physics: 90, chemistry: 92, math: 90 },
        { id: 8, name: "Emma", physics: 82, chemistry: 85, math: 82 },
        { id: 9, name: "Daniel", physics: 89, chemistry: 88, math: 89 },
        { id: 10, name: "Mia", physics: 93, chemistry: 90, math: 93 }
      ];
      
    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
              <Line dataKey="math" stroke="red"></Line> 
              <Line dataKey= {'physics'}></Line> 
            </LChart>
        </div>
    );
};

export default LineChart;