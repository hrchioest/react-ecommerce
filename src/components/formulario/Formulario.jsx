import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AlertFailForm from './AlertFailForm'

const Formulario = ({ createOrder }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '36ch',
            },
        },
    }))

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        adress: '',
        email: '',
        emailConfirmation: '',
        phone: '',
    })
    const [open, setOpen] = React.useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const handleOnclick = () => {
        const { firstName, lastName, adress, email, phone } = form
        createOrder({ firstName, lastName, adress, email, phone })
    }

    const classes = useStyles()

    const disabled = !(
        form.email.length &&
        form.firstName.length &&
        form.lastName.length &&
        form.adress.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <>
            <Box display="flex" justifyContent="center" margin="60px 0">
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    fullWidth={true}
                >
                    <h2>To continue with the purchase, complete the data</h2>
                    <Box>
                        <TextField
                            required
                            label="First Name"
                            Value={form.firstName}
                            placeholder="Andrea"
                            multiline
                            name="firstName"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="First name"
                        />
                        <TextField
                            required
                            label="Last Name"
                            Value={form.lastName}
                            placeholder="Bernales Jorge"
                            multiline
                            name="lastName"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="Last name"
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label="Adress"
                            Value={form.adress}
                            placeholder="Calle Segovia Nº 1892 - Barrio Norte"
                            multiline
                            name="adress"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="Adress"
                        />
                        <TextField
                            required
                            label="Email"
                            Value={form.email}
                            placeholder="andrea@gmail.com"
                            multiline
                            name="email"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="E-mail"
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label="Repetir email"
                            Value={form.emailConfirmation}
                            placeholder="andrea@gmail.com"
                            multiline
                            name="emailConfirmation"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="Repeat email"
                        />
                        <TextField
                            required
                            label="15111008"
                            Value={form.phone}
                            placeholder="Teléfono de contacto"
                            multiline
                            name="phone"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Box>
                    <Box display="flex" justifyContent=" flex-end" p={1}>
                        {disabled ? (
                            <AlertFailForm open={open} setOpen={setOpen} />
                        ) : (
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: '#f7d04b',
                                    color: '#000',
                                }}
                                onClick={handleOnclick}
                            >
                                Finish buying
                            </Button>
                        )}
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Formulario
