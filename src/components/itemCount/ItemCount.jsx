import React from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Box from '@material-ui/core/Box'

const ItemCount = ({ min, stock, count, setCount }) => {
    const add = () => {
        if (count < stock) setCount(count + 1)
    }

    const subtract = () => {
        if (count > min) setCount(count - 1)
    }

    return (
        <Box flexDirection="colum" width="185px" height="100px">
            <Box
                display="flex"
                justifyContent="space-between"
                border="solid 1px black"
                borderRadius="8px"
            >
                {stock > 0 && (
                    <>
                        <RemoveCircleIcon
                            style={{ fontSize: 30 }}
                            onClick={subtract}
                        ></RemoveCircleIcon>
                        <span style={{ paddingTop: '7px' }}>{count}</span>
                        <AddCircleIcon
                            style={{ fontSize: 30 }}
                            disabled={count === stock}
                            onClick={add}
                        ></AddCircleIcon>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default ItemCount
