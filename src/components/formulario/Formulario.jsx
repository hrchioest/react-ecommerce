import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Formulario = ({createOrder}) =>{
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
          },
        },
      }));
      const [form,setForm] = useState({
          name:'',
          email:'',
          emailConfirmation:'',
          phone:''
      })
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setForm ( (state) =>{
            return { ...state, [name]:value};
        })
      };

      const handleOnclick = () =>{
        const {name, email, phone} = form;
        createOrder({name, email, phone});
        
      }
   

    
    const classes = useStyles();
    return(
        <>
         <form className={classes.root} noValidate autoComplete="off">
             <div>
                <TextField
                    required
                    label="Nombre y apellido"
                    Value={form.name}
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    required
                    label="Email"
                    Value={form.email}
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    required
                    label="Repetir email"
                    Value={form.emailConfirmation}
                    name="emailConfirmation"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    required
                    label="Teléfono de contacto"
                    Value={form.phone}
                    name="phone"
                    variant="outlined"
                    onChange={handleChange}
                />
             </div>
         </form>
         <Box display="flex" justifyContent=" flex-end"p={1} >
             <Button variant="contained" color="secondary" onClick={handleOnclick}>Finalizar compra</Button>
        </Box>
        </>
    )
}

export default Formulario;