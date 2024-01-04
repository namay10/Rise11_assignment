import React from 'react'
import { Chart } from "react-google-charts";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

function Visitors() {
    const data = [
        ["DAY", "Visitors"],
        ["MON", 10],
        ["TUE", 20],
        ["WED", 50],
        ["THU", 30],
        ["FRI", 20],
        ["SAT", 70],
        ["SUN", 50],
      ];

  return (
    <Card className="max-w-full my-4">
      <Title>Visitors</Title>
      <Chart 
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={{ legend: { position: 'none' }, backgroundColor:"red-400"}}
    />
    </Card>
    
  )
}

export default Visitors







