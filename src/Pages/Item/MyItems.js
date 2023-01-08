import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import auth from '../../firebase.init'

const MyItems = () => {
  const [products, setProducts] = useState([])
  const [user] = useAuthState(auth)


  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handelProductDelete = (id) => {
    const proceed = window.confirm(
      'Are you sure you want to delete this product?',
    )
    if (proceed) {
      console.log(id)
      const url = `http://localhost:5000/product/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('item is deleted')
            const remaining = products.filter((product) => product._id !== id)
            setProducts(remaining)
          }
        })
    }
  }

  return (
    <>
      <div className="mb-10 md:mb-16">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          My Items
        </h2>
      </div>

      <section className="text-gray-600">
        <div className="container px-5 lg:mb-32 mx-auto">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden sm:rounded">
                  {products
                    .filter((p) => user.email === p.email)
                    .map((product) => (
                      <div key={product._id}>
                        <table className="min-w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase"
                              >
                                Product Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase"
                              >
                                Supplier
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black  uppercase"
                              >
                                Email ID
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase"
                              >
                                Stocks
                              </th>
                              <th
                                scope="col"
                                className="relative px-6 py-3 text-black "
                              >
                                <span className="sr-only">Status</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white">
                              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                {product.name}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                {product.supplier}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                {product.email}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                {product.stock}
                              </td>
                              <td className="px-6 py-4 text-sm font-bold text-right whitespace-nowrap">
                                <button
                                  onClick={() =>
                                    handelProductDelete(product._id)
                                  }
                                  className="text-white hover:text-gray-200 active:text-gray-400 text-sm font-semibold transition duration-100 bg-black px-2 py-1  rounded lg:ml-16 lg:mt-1"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyItems
