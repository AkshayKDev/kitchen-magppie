import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ContactUs from '../../components/contact-us'

interface Product {
    id: number
    name: string
    price: number
    description: string
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        axios
            .get<Product[]>('http://localhost:1337/products')
            .then((response) => setProducts(response.data))
            .catch((error) => {
                console.error('Error fetching products:', error)
            })

        console.log(products)
    }, [])

    return <ContactUs />
}

export default Home