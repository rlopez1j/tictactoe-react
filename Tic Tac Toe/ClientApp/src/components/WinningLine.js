import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    canvas: {
        position: 'absolute',
        height: 387,
        width: '16%'
    },
    lowZ: {
        zIndex: -1
    },
    highZ: {
        zIndex: 2
    }
})

let winningIndicesMap = {
    null: {
        startX: null,
        startY: null,
        endX: null,
        endY: null
    },
    '02': {
        startX: 0,
        startY: 65,
        endX: 500,
        endY: 65
    },
    '35': {
        startX: 0,
        startY: 190,
        endX: 500,
        endY: 190
    },
    '68': {
        startX: 0,
        startY: 325,
        endX: 500,
        endY: 325
    },
    '17': {
        startX: 200,
        startY: 0,
        endX: 200,
        endY: 500
    },
    '06': {
        startX: 65,
        startY: 0,
        endX: 65,
        endY: 500,
    },
    '28': {
        startX: 345,
        startY: 0,
        endX: 345,
        endY: 500
    },
    '08': {
        startX: 0,
        startY: 0,
        endX: 800,
        endY: 750
    },
    '26': {
        startX: 400,
        startY: 0,
        endX: 0,
        endY: 390
    }
}


export default function WinningLine({ winningIndices }) {
    const classes = useStyles()

    const drawLine = ({ startX, startY, endX, endY }) => {
        const canvas = document.getElementById('canvas');
        canvas.height = canvas.clientHeight
        canvas.width = canvas.clientWidth
        const canvasContext = canvas.getContext('2d');

        canvasContext.imageSmoothingEnabled = true
        canvasContext.strokeStyle = 'red'
        canvasContext.lineWidth = 10

        if (winningIndices) {
            canvasContext.beginPath()
            canvasContext.moveTo(startX, startY)
            canvasContext.lineTo(endX, endY)
            canvasContext.stroke()
        } else {
            canvasContext.clearRect(0, 0, canvas.width, canvas.height)
        }

    }

    useEffect(() => {
        drawLine(winningIndicesMap[winningIndices])
    }, [winningIndices])

    let zIndexClass = winningIndices ? classes.highZ : classes.lowZ
    return (<>
        <canvas id='canvas' className={`${classes.canvas} ${zIndexClass}`}></canvas>

    </>)
}
