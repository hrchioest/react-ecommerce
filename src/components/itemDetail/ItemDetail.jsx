import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ item }) => {
    const [count, setCount] = React.useState(1)
    const [selectCount, setSelectCount] = React.useState(false)
    const { productsAdd } = React.useContext(CartContext)

    const handleClickComprar = () => {
        if (count > 0) {
            setSelectCount(true)
            productsAdd({
                id: item.id,
                name: item.name,
                img: item.img,
                count,
                price: item.price,
                stock: item.stock,
            })
        }
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            margin="auto"
            flexWrap="wrap"
        >
            <Box flexDirection="colum" marginTop="60px">
                <h2>{item.name}</h2>
                <img src={item.img} alt="img" width="350" />
            </Box>
            <Box paddingTop={10} margin={5}>
                <div style={{ fontWeight: 'bold' }}>{item.description}</div>
                <p>price: $ {Intl.NumberFormat().format(item.price)}</p>
                <p>Available stock: {item.stock}</p>

                <ItemCount
                    setCount={setCount}
                    count={count}
                    min={1}
                    stock={item.stock}
                />

                {selectCount ? (
                    <>
                        <div>
                            <Link style={{ textDecoration: 'none' }} to="/cart">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{
                                        marginBottom: '20px',
                                        backgroundColor: '#000',
                                    }}
                                >
                                    Finish buying
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ backgroundColor: '#f7d04b' }}
                                >
                                    Continue buying
                                </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#000', color: '#fff' }}
                        fullWidth
                        onClick={handleClickComprar}
                        disabled={item.stock === 0}
                    >
                        Add to cart
                    </Button>
                )}
            </Box>
        </Box>
    )
}

export default ItemDetail
