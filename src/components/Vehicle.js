import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

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


export default function VehiclesComponent(props) {
    const classes = useStyles();
    const columns = [
        {
            field: 'id',
            headerName: 'Vehicle ID',
            sortable: false,
            flex: 1,
            align: 'left',
        },
        {
            field: 'id1',
            headerName: ' ',
            sortable: false,
            flex: 0.2,
            align: 'right',
            renderCell: (params) => (
                <Box
                    component="span"
                    m={12} s
                    className={`${classes.spreadBox} ${classes.box}`}
                >
                    <Button variant="contained" color="primary" href={`/#/${params.id}`} >
                        VIEW TIMELINE
                     </Button>
                </Box>
            ),
        }
    ];
    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <DataGrid
                pageSize={props.size}
                rowsPerPageOptions={[5, 10, 20]}
                pagination
                page={props.page}
                rowCount={props.totalItems}
                rows={props.vehicles}
                columns={columns}
                paginationMode="server"
                onPageChange={props.handlePageChange}
                onPageSizeChange={props.handlePageSizeChange}
                loading={props.loading}
            />
        </div>
    );
}
