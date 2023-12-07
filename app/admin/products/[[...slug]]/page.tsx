import React from 'react'

interface Props {
    params: { slug: string[] },
    searchParams: {
        sortOrder: string
    }
}
const ProductPage = ({ params: { slug }, searchParams: {
    sortOrder 
} }: Props) => {
    return (
        <div>
            <h1>Products</h1>{slug}</div>
    )
}

export default ProductPage