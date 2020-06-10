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

import data from '../../data/violations.json';

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

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

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

const Violations: React.FC = () => {
  const classes = useStyles();

  const [rangeValue, setRangeValue] = React.useState<number[]>([7, 16]);

  const handleRangeChange = (event: any, newValue: number | number[]) => {
    setRangeValue(newValue as number[]);
  };

  const handleDelete = (id: number) => {
    alert('Delete Successful!');
  };

  return (
    <Card>
      <CardHeader title="Violations" subheader="Measured in %"></CardHeader>
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
          <Table className={classes.table} aria-label="Violations">
            <TableHead>
              <TableRow>
                <StyledTableCell>Direction</StyledTableCell>
                <StyledTableCell>Spatial</StyledTableCell>
                <StyledTableCell>Tempora</StyledTableCell>
                <StyledTableCell>Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">{row.direction}</StyledTableCell>
                  <StyledTableCell>{row.spatial}%</StyledTableCell>
                  <StyledTableCell>{row.tempora}%</StyledTableCell>
                  <StyledTableCell>{row.spatial + row.tempora}%</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </CardContent>
    </Card>
  );
};

export default Violations;
