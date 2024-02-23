import React from 'react'

interface Props {
    params: {
        idP: number,
        id:number,
    }
}

const PhotoPage = ({ params: { idP,id } }: Props) => {
    return (
        <div>PhotoPage {idP} - {id}</div>
    )
}

export default PhotoPage