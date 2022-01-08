import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  padding: "20px",

  '@media screen and (max-width: 700px)': {
    width: 300,
    fontSize: "12px"
  },
};

export default function BasicModal({ content }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          fontFamily: "'Montserrat', sans serif",
          background: "rgb(0, 0, 0)",
          color: "white",
          borderRadius: "10px",
          "&:hover": { background: "rgb(0, 0, 0)" },
        }}
      >
        Guidelines
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 style={{ marginBottom: "20px" }}>Guidelines</h3>
          <ul
            style={{
              marginLeft: "10px",
            }}
          >
            {content.map((g) => {
              return (
                <li style={{ listStyle: "disc" }}>
                  <p>{g}</p>
                  <br />
                </li>
              );
            })}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
