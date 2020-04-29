import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup, 
  VictoryLegend, 
  VictoryLine
} from "victory";

const wincTheme = {
  area: {
    style: {
      data: {
        fill: "#212121"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      grid: {
        fill: "none",
        stroke: "none"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 20
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      maxLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      median: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      medianLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      min: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      minLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q1: {
        padding: 8,
        fill: "#455A64"
      },
      q1Labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q3: {
        padding: 8,
        fill: "#455A64"
      },
      q3Labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    boxWidth: 20,
    width: 350,
    height: 350,
    padding: 50
  },
  candlestick: {
    style: {
      data: {
        stroke: "#455A64"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    candleColors: {
      positive: "#ffffff",
      negative: "#455A64"
    },
    width: 350,
    height: 350,
    padding: 50
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  group: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  legend: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      title: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  pie: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    style: {
      data: {
        padding: 8,
        stroke: "#ECEFF1",
        strokeWidth: 1
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 20,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        fill: "#455A64",
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  stack: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  tooltip: {
    style: {
      fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 12,
      letterSpacing: "normal",
      padding: 5,
      fill: "#455A64",
      stroke: "transparent",
      strokeWidth: 0,
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#212121",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
        pointerEvents: "none"
      },
      flyout: {
        stroke: "#212121",
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    },
    width: 350,
    height: 350,
    padding: 50
  }
};

const getRandomRating = () => Math.random() * 5;
// const getRandomRating = () => 2;

//console.log({props.tasks})
let assignmentRatingAverage = 
[
"SCRUM", "W1D1-1", "W1D2-1", "W1D2-2", "W1D2-3", "W1D2-4", "W1D2-5", "W1D3-1", "W1D3-2", "W1D3-4", "W1D3-5", "W1D3 - Project - Guess-the-number", "W1D4-1", "W1D4 - Project - Kleurentoggle", "W1D5 - Project - Galgje", "W2D1-1", "W2D1-2", "W2D2-1", "W2D2-2", "W2D2-3", "W2D3-1", "W2D3-2", "W2D3-3", "W2D4-1", "W2D4-2", "W2D4-3", "W2D5 - Project - Filmzoeker", "W3D1-1", "W3D1-2", "W3D1-3", "W3D1-4", "W3D2-1", "W3D2-2", "W3D2-3", "W3D3-1", "W3D3-2", "W3D3-3", "W3D3-4", "W3D4-1", "W3D4-2", "W3D5 - Project - Todo-List", "W4D2-1", "W4D2-2", "W4D2-3", "W4D2-4", "W4D3-1", "W4D3-2", "W4D3-3", "W4D3-4", "W4D3-5", "W4D3 - Project - Next-Level CSS", "W5D4-1", "W5D5 - Project - Lil_Playlist", "W6D1-1", "W6D2-1", "W6D2 - Project - Eindopdracht"];

  

assignmentRatingAverage = assignmentRatingAverage.map(avg => ({
  assignment: avg,
  difficultyRating: getRandomRating(),
  enjoymentRating: getRandomRating()
}));


// Add label
const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
  assignment: avg.assignment,
  difficultyRating: avg.difficultyRating,
  enjoymentRating: avg.enjoymentRating,
  label: `Opdracht ${
    avg.assignment
  }, difficultyRating: ${avg.difficultyRating.toFixed(
    1
  )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`
}));

const ChartAllStudents = (props) => (
  <>
  <VictoryChart domainPadding={15} theme={wincTheme}>
    <VictoryLegend
      x={150}
      y={10}
      orientation="horizontal"
      gutter={20}
      style={{ border: { stroke: "black" } }}
      colorScale={["red", "yellow"]}
      data={[{ name: "Moeilijk" }, { name: "Leuk" }, ]}
    />
       <VictoryLegend
      x={400}
      y={10}
      orientation="horizontal"
      gutter={20}
      style={{ border: { stroke: "black" } }}
      colorScale={["violet", "brown"]}
      data={[{ name: "Moeilijk" }, { name: "Leuk" }, ]}
    />
    <VictoryGroup offset={3}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={props.data}
        x="task"
        y="diffAverage"
      />
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={props.data}
        x="task"
        y="diffAverage"
        tickFormat={props.data.map((avg) => avg.opdracht)}
      />
    </VictoryGroup>
    <VictoryAxis
      style={{ tickLabels: { fontSize: 5, padding:30, angle: 90 } }}
    />
    <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 7 } }} />
  </VictoryChart>
  <VictoryChart domainPadding={15} theme={wincTheme}>
    <VictoryLine
      style={{
        data: { stroke: "#C43A31" },
        parent: { border: "1px solid #ccc" },
      }}
      data={props.data}
      x="task"
      y="diffAverage"
    />
    <VictoryLine
      style={{
        data: { stroke: "#FF00FF" },
        parent: { border: "1px solid #ccc" },
      }}
      data={props.data}
      x="task"
      y="likeAverage"
    />
    <VictoryAxis
      style={{ tickLabels: { fontSize: 5, padding: 35, angle: 90 } }}
    />
    <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 7 } }} />
  </VictoryChart>

    </>
);
export default ChartAllStudents
