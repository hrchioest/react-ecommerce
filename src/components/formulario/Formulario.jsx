import React, { useState, useMemo } from 'react'
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
        name: '',
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
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }

    const classes = useStyles()

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <>
            <Box display="flex" justifyContent="center">
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    fullWidth={true}
                >
                    <Box>
                        <TextField
                            required
                            label="Nombre y Apellido"
                            Value={form.name}
                            placeholder="Nombre y Apellido"
                            multiline
                            name="name"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            label="Email"
                            Value={form.email}
                            placeholder="Email"
                            multiline
                            name="email"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label="Repetir email"
                            Value={form.emailConfirmation}
                            placeholder="Confirma tu email"
                            multiline
                            name="emailConfirmation"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            label="Teléfono de contacto"
                            Value={form.phone}
                            placeholder="Teléfono de contacto"
                            multiline
                            name="phone"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Box>
                </form>
            </Box>

            <Box display="flex" justifyContent=" flex-end" p={1}>
                {disabled ? (
                    <AlertFailForm open={open} setOpen={setOpen} />
                ) : (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleOnclick}
                    >
                        Finalizar compra
                    </Button>
                )}
            </Box>
        </>
    )
}

export default Formulario
