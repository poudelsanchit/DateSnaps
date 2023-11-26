import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AddDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='Btn fixed bottom-6 right-16  '>
      <button onClick={handleClickOpen} className=' rounded-full bg-slate-950 text-white w-12 h-12 font-bold shadow-sm text-xl hover:bg-gray-700'>+</button>
      </div><Dialog  className=' rounded-full' open={open} onClose={handleClose}>
        <div className=' bg-indigo-200 text-white'>
        <DialogTitle></DialogTitle>
        <DialogContent  className=' rounded-full'>
          <DialogContentText>
          
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What's on your Mind ?"
            type="textarea"
            fullWidth
            variant="standard"
          />
          <input type='file'></input>
        </DialogContent>



        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions></div>
      </Dialog>
    </React.Fragment>
  );
}