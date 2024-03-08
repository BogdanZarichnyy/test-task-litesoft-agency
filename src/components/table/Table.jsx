import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';

import AddButtom from '../addButton/AddButton';
import Actions from '../actions/Actions';

import scss from './Table.module.scss';

export default function ReactMaterialUITable({ dataRowsTable, dataColumnsTable }) {
  const [dataTableRows, setDataTableRows] = React.useState([]);
  const [dataTableColumns, setDataTableColumns] = React.useState([]);
  const [dataTable, setDataTable] = React.useState([]);

  React.useEffect(() => {
    setDataTableRows(dataRowsTable);
    setDataTableColumns(dataColumnsTable);
  }, []);

  React.useEffect(() => setDataTable(dataTableRows), [dataTableRows]);

  const handlerChecked = (event) => {
    console.log('Switch change', event.target.checked);
    // setDataTableRows(() => rows.filter((item) => item.like === event.target.checked));
    // setDataTableRows(() => [ 
    //   ...[...dataTableRows.filter((item) => item.like === event.target.checked)].sort((prevRow, row) => prevRow.id - row.id), 
    //   ...[...dataTableRows.filter((item) => item.like !== event.target.checked)].sort((prevRow, row) => prevRow.id - row.id) 
    // ]);
    setDataTable(() => dataTableRows.filter((item) => item.like === event.target.checked));
  }

  return (
    <Paper className={scss.paper} >
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table className={scss.table} stickyHeader aria-label="sticky table" > 
          <TableHead>
            <TableRow>
              {!!dataTableColumns && dataTableColumns.map((column) => (
                <TableCell key={column.dataKey}
                  className={scss.th}
                  align={column.dataKey === 'name' ? 'left' :'center'}
                  sx={{ minWidth: column.width }}
                >
                  {column.label === 'Image' 
                  ? 
                    <>
                      <Switch defaultChecked size="small" 
                        className={scss.switch}
                        onChange={handlerChecked} 
                      ></Switch>
                      <span className={scss.label} >{column.label}</span>
                    </>
                  : column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={scss.tbody} >
            {!!dataTable && dataTable.map((row, index) => {
              return (
                <TableRow className={scss.tr} key={row.id} >
                  {!!dataTableColumns && dataTableColumns.map((column) => {
                    const map = {
                      photo: <img className={scss.photo} src={row[column.dataKey]} alt='photo' width={100} height={100} />,
                      price: column.dataKey === 'price' && row[column.dataKey].map((item, index) => <p key={item} style={{ fontWeight: index === 0 ? 700 : 400 }} >{item}</p>),
                      addButton: <AddButtom id={row.id}/>,
                      actions: <Actions id={row.id} like={row.like} dataTableRows={dataTableRows} setDataTableRows={setDataTableRows} />
                    }

                    return (
                      <TableCell className={scss.td} key={column.dataKey}
                        align={column.dataKey === 'name' ? 'left' :'center'}
                        variant="body"
                        sx={{
                          border: 'none',
                          borderTop: index !== 0 && '10px solid #F6F7F9',
                          minWidth: column.width,
                          fontWeight: column.dataKey === 'name' || column.dataKey === 'qty' ? 700 : 400,

                          wordBreak: column.dataKey === 'name' && 'break-word',
                          overflow: column.dataKey === 'name' && 'hidden',
                          textOverflow: column.dataKey === 'name' && 'ellipsis',

                          borderTopLeftRadius: column.dataKey === 'photo' && "4px",
                          borderBottomLeftRadius: column.dataKey === 'photo' && "4px",
                          borderTopRightRadius: column.dataKey === 'image' && "4px",
                          borderBottomRightRadius: column.dataKey === 'image' && "4px",
                        }}
                      >
                        {map[column.dataKey] || row[column.dataKey]}
                      </TableCell>
                    )
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}