import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = (theme) => ({
  box: {
    height: 100,
    display: "flex",
  },
  spreadBox: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: '50px',
    width: 20,
    height: 30,
  },
});


export default function LocationComponent(props) {

  const classes = useStyles();
  const columns = [
    {
      field: 'latitude',
      headerName: 'Latitude',
      sortable: false,
      flex: 0.3
    },
    {
      field: 'longitude',
      headerName: 'Longitude',
      sortable: false,
      flex: 0.3
    },
    {
      field: 'updatedAt',
      headerName: 'Recorded Date',
      sortable: false,
      flex: 0.3,
      type: 'date'
    }
  ];
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#" className={classes.link} >
          <ArrowBackIcon className={classes.icon} /> Back
        </Link>
      </Breadcrumbs>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="flex-end">
          <KeyboardDatePicker
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="From Date"
            value={props.fromDate}
            autoOk={true}
            onChange={props.handleFromDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            variant="inline"
            id="date-picker-dialog"
            label="To Date"
            format="MM/dd/yyyy"
            autoOk={true}
            value={props.toDate}
            onChange={props.handleToDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

        </Grid>
      </MuiPickersUtilsProvider>

      <DataGrid
        pageSize={props.size}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        page={props.page}
        rowCount={props.totalItems}
        rows={props.Vehicle_locations}
        columns={columns}
        paginationMode="server"
        onPageChange={props.handlePageChange}
        onPageSizeChange={props.handlePageSizeChange}
        loading={props.loading}
      />
    </div>
  );
}
