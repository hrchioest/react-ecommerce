import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Spinner() {
    return (
        <div
            style={{
                marginLeft: '50%',
                paddingTop: '15%',
                marginBottom: '28%',
            }}
        >
            <CircularProgress disableShrink style={{ color: '#f7d04b' }}/>
        </div>
    )
}
