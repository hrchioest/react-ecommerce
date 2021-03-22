import React, { useEffect } from 'react'
import {
    Menu,
    IconButton,
    MenuItem,
    Typography,
    AppBar,
    Toolbar,
} from '@material-ui/core/'
import MoreIcon from '@material-ui/icons/MoreVert'
import CartIcon from '../cart/CartIcon'
import useStyles from './Style'
import { NavLink, Link } from 'react-router-dom'
import { getFirestore } from '../../firebase'

// const categories = [
//     { name: 'Notebooks', id: 'notebooks' },
//     { name: 'Audio', id: 'audio' },
//     { name: 'Smartwatches', id: 'smartwatches' },
// ]

const Navbar = () => {
    const classes = useStyles()

    // conectando categories con firebase:

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('categories')
        itemCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results')
                } else {
                    querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                }
            })
            .catch((error) => {
                console.log('Error searching categories', error)
            })
    }, [])

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link
                className={classes.categoriaMobile}
                to="/categories/notebooks"
            >
                <MenuItem>Notebooks</MenuItem>
            </Link>
            <Link className={classes.categoriaMobile} to="/categories/audio">
                <MenuItem>Audio</MenuItem>
            </Link>
            <Link
                className={classes.categoriaMobile}
                to="/categories/smartwatches"
            >
                <MenuItem>Smartwatches</MenuItem>
            </Link>
        </Menu>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/">
                            <img
                                className={classes.title}
                                src="https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/themes/common/logo-1421680389-1571774718-1624cbbd901c2cf55aa291fb448a8c991571774719.png?"
                                alt="imagen-logo"
                            />
                        </NavLink>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link className={classes.categoria} to="/">
                            <MenuItem>Home</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/notebooks"
                        >
                            <MenuItem>Notebooks</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/audio"
                        >
                            <MenuItem>Audio</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/smartwatches"
                        >
                            <MenuItem>Smartwatches</MenuItem>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                    <NavLink to="/cart">
                        <CartIcon />
                    </NavLink>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    )
}

export default Navbar
