import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, removefromCart, getTotals, decreaseCart } from '../../redux/cartSlice'
import { FaPlus, FaMinus } from "react-icons/fa6";

import Button from '../ui/Button'


const CartProduct = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  
    React.useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);
    
    
    return (
    <div className=' container my-24'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
            {cart.cartItems.map((cartItem, index)=>{
                return(
                    <div key={index} className="group">
                        <div className="relative">
                            <img
                                src={cartItem.img}
                                alt=""
                                className="h-[180px] w-[260px] object-cover rounded-md"
                            />
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                                <Button
                                text={"Delete from cart"}
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                handler={() => dispatch(removefromCart({ id: cartItem.id }))}
                                />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{cartItem.title}</h2>
                            <h2 className="font-bold">${cartItem.price}</h2>
                            <div className="flex flex-row gap-4 place-items-center mt-2">
                                <Button
                                text={<FaMinus />}
                                children={"px-3 py-3"}
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                handler={() => dispatch(decreaseCart(cartItem))}/>
                                <span className='font-semibold'>{cartItem.cartQuantity}</span>
                                <Button
                                text={<FaPlus />}
                                children={"px-3 py-3 items-center"}
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                handler={() => dispatch(addtoCart(cartItem))}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CartProduct