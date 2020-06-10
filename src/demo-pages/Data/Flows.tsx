import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import data from '../../data/flows.json';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#1c9c9c",
      color: theme.palette.common.white,
      fontWeight: 'bold'
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const useStyles = makeStyles({
  sliderContainer: {
    width: 300,
    textAlign: 'center',
    margin: '0 auto',
  },
  table: {
    minWidth: 700,
  },
});

type flowsData = {
  id: number,
  direction: string,
  movement: string,
  passengerVehicles: number,
  motorcycles: number,
  heavyVehicles: number,
  crossingPedestrians: number,
  bicycles: number
}

function getFlowsData(): flowsData[] {
  const flowsData = [] as flowsData[];

  data.map((flow) => {
    let rowNo = 1;
    flow.data.map((children, i) => {
      let d = {} as flowsData;
      d.id = i;
      d.direction = rowNo == 2 ? flow.direction : '';
      d.movement = children.movement;
      d.passengerVehicles = children.passengerVehicles;
      d.motorcycles = children.motorcycles;
      d.heavyVehicles = children.heavyVehicles;
      d.crossingPedestrians = children.crossingPedestrians;
      d.bicycles = children.bicycles

      flowsData.push(d);
      rowNo += 1;
    })
  })

  return flowsData;
}

const Flows: React.FC = () => {
  const classes = useStyles();

  const [rangeValue, setRangeValue] = React.useState<number[]>([7, 16]);

  const handleRangeChange = (event: any, newValue: number | number[]) => {
    setRangeValue(newValue as number[]);
  };

  return (
    <Card>
      <CardHeader title="Flows" subheader="By road user, movement direction, and road user in units/hour"></CardHeader>
      <CardContent>
      <div className={classes.sliderContainer}>
          <Typography id="range-slider" gutterBottom>
            {`${rangeValue[0]}:00 - ${rangeValue[1]}:00`}
          </Typography>
          <Slider
            min={0}
            max={24}
            value={rangeValue}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="Flows">
            <TableHead>
              <TableRow>
                <StyledTableCell>Direction</StyledTableCell>
                <StyledTableCell>Movement</StyledTableCell>
                <StyledTableCell align="right">Passenger Vehicles</StyledTableCell>
                <StyledTableCell align="right">Motorcycles</StyledTableCell>
                <StyledTableCell align="right">Heavy Vehicles</StyledTableCell>
                <StyledTableCell align="right">Crossing Pedestrians</StyledTableCell>
                <StyledTableCell align="right">Bicycles</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                getFlowsData().map((row, i) => (
                  <TableRow key={i}>
                    <TableCell style={{ fontWeight: 'bold' }}>{row.direction}</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>{row.movement}</TableCell>
                    <TableCell align="right">{row.passengerVehicles}</TableCell>
                    <TableCell align="right">{row.motorcycles}</TableCell>
                    <TableCell align="right">{row.heavyVehicles}</TableCell>
                    <TableCell align="right">{row.crossingPedestrians}</TableCell>
                    <TableCell align="right">{row.bicycles}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>

      </CardContent>
    </Card>
  );
};

export default Flows;
