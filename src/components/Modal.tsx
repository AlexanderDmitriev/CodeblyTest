import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ data,open, setOpen }: any) {
  const handleClose = () => setOpen(false);
  const itemInfo: string[] = [];
  if (data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    for (let i = 0; i <= keys.length - 1; i += 1) {
      itemInfo.push(`${keys[i]} - ${values[i]}`);
    }
  }

  return (
    <div>
      {data&&(<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.name}
          </Typography>
          {itemInfo.map(param => (
            <Typography
              id="modal-modal-description"
              key={nanoid()}
              sx={{ mt: 2 }}
            >
              {param}
            </Typography>
          ))}
        </Box>
      </Modal>)}
    </div>
  );
}
