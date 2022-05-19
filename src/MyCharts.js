import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

export default function MyCharts() {
  return (
    <div>
      <VictoryChart
        domainPadding={40}>
        <VictoryBar
          data={[
            { quarter: 1, earnings: 5 },
            { quarter: 2, earnings: 2 },
            { quarter: 3, earnings: 1 },
            { quarter: 4, earnings: 20 }
          ]}
          x='quarter'
          y='earnings'
        />

      </VictoryChart>
    </div>
  );
}

