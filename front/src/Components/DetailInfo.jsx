import React from 'react'
import { Link } from "react-router-dom";


export default function DetailInfo({productInfo, userInfo, salesInfo}) {
  return (
    <div className='flex my-5'>
        <div className=' w-1/2 mx-2'>
            <h2 className='my-3'>상품정보</h2>
            <div className='py-5 border-t-2'>
                <h4>{productInfo.content}</h4>
            </div>
        </div>
        <div className=' w-1/2 ml-8'>
            <h2 className='my-3'>판매자 정보</h2>
            <div className='py-5 border-2 p-3 '>
                <Link to={`/user/${userInfo.user_id}`} className='flex justify-between'>
                    <h4 className='my-5'>{userInfo.user_nickname}</h4>
                    <img src={userInfo.user_profile} alt='salesInfo' className='mx-3 rounded-full h-20  '></img>
                </Link>
                <div className='flex text-center w-full  my-5 border-2 '>
                    <div className=' w-1/2 border-r-2 p-6'>
                        <h4>판매횟수</h4>
                        
                    </div>
                    <div className='w-1/2 p-6'>
                        <h4>판매중인 상품</h4>
                        <h5>{salesInfo.length}</h5>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    {salesInfo.map((v,i)=>{
                        if(i<3){
                            return <Link to={`/product/${v.product_id}`} className='w-1/3 m-5 items-center' key={i} >
                                <img src={v.main_upload_url} key={i} alt='saleProduct' className='h-24'/>
                                <h6>{v.title}</h6>
                                <h6>{v.price}원</h6>
                            </Link>
                        }
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
