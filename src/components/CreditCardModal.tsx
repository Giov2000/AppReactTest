import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function CreditCardModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>PAY WITH CREDIT CARD</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Credit card information
                    </Typography>
                    <Box
                        component="form"
                        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                        noValidate
                        autoComplete="off">
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Owner name"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Card number"
                                variant="outlined"
                            />
                            <TextField
                                id="filled-basic"
                                label="CVV"
                                variant="outlined"
                            />
                            <TextField
                                id="standard-basic"
                                label="Expiration Date"
                                variant="outlined"
                            />
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default CreditCardModal;
