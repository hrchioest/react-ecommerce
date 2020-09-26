import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CartIcon from '../cart/CartIcon'
import useStyles from './Style'
import { useLocation, NavLink, useHistory } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { getFirestore } from '../../firebase'

// const categories = [
//     { name: 'Notebooks', id: 'notebooks' },
//     { name: 'Audio', id: 'audio' },
//     { name: 'Smartwatches', id: 'smartwatches' },
// ]

const detectCurrentCategory = (pathname) => {
    return pathname.split('/').slice(-1).pop()
}

const Navbar = () => {
    const { push } = useHistory()
    const classes = useStyles()

    // conectando categories con firebase:
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('categories')
        itemCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results')
                }
                setCategories(
                    querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                )
            })
            .catch((error) => {
                console.log('Error searching categories', error)
            })
    }, [])

    console.log(categories)
    const { pathname } = useLocation()

    const [currentCategory, setCurrentCategory] = React.useState(
        pathname === '/' || pathname === '/cart'
            ? 'none'
            : detectCurrentCategory(pathname)
    )

    useEffect(() => {
        if (pathname === '/') {
            setCurrentCategory('none')
        }
    }, [pathname])

    const handleChange = ({ target: { value } }) => {
        setCurrentCategory(value)
        push(value === 'none' ? '/' : `/categories/${value}`)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/">
                            <img
                                className={classes.title}
                                src="https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/themes/common/logo-1421680389-1571774718-1624cbbd901c2cf55aa291fb448a8c991571774719.png?"
                            />
                        </NavLink>
                    </Typography>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">
                            Categories
                        </InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-outlined"
                            id="demo-controlled-open-outlined"
                            value={currentCategory}
                            onChange={handleChange}
                        >
                            <MenuItem value="none">None</MenuItem>
                            {categories.map((category) => (
                                <MenuItem
                                    key={category.id}
                                    value={category.key}
                                >
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <NavLink to="/cart">
                        <CartIcon />
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
