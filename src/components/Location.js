import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
    box: {
        height: 100,
        display: "flex",
    },
    spreadBox: {
        justifyContent: "space-between",
        alignItems: "center"
    }
});


export default function LocationComponent(props) {

    console.log(props.data);
    const classes = useStyles();
    const columns = [
        {
            field: 'id',
            headerName: 'Vehicle ID',
            sortable: false,
        }
    ];
    return (
        <div style={{ height: 800, width: '100%' }}>
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
