import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { penyakit: "Penyakit A", jumlah: 2.525 },
  { penyakit: "Penyakit B", jumlah: 3.018 },
  { penyakit: "Penyakit C", jumlah: 3.682 },
  { penyakit: "Penyakit D", jumlah: 4.44 },
  { penyakit: "Penyakit E", jumlah: 5.31 },
  { penyakit: "Penyakit F", jumlah: 6.127 },
  { penyakit: "Penyakit G", jumlah: 6.93 },
  { penyakit: "Penyakit H", jumlah: 5.31 },
  { penyakit: "Penyakit I", jumlah: 6.127 },
  { penyakit: "Penyakit J", jumlah: 6.93 },
];

export default class Grafik extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="jumlah" argumentField="penyakit" />
          <Title text="10 Penyakit Terbanyak" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
