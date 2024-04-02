import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import DetailSlick from "../Components/DetailSlick";
import DetailContents from "../Components/DetailContents";
import DetailInfo from "../Components/DetailInfo";
import Comment from "../Components/Comment";
import UserViewedProductsContainer from "../Components/home/UserViewedProductsContainer";
import ProductCardSlider from "../Components/home/ProductCardSlider";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [users, setUsers] = useState({});
  const [salesProducts, setSalesProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [catagoryProduct, setCatagoryProduct] = useState([]);

  const settings={
    slide: "a",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    draggable: true,
  };
  
  useEffect(() => {
    axiosInstance
      .get(`/product/${id}`)
      .then((res) => {
        setProducts(res.data.product);
        setUsers(res.data.user);
        setSalesProducts(res.data.sales_product);
        setComments(res.data.comment);
        setCatagoryProduct(res.data.category_product);
      })
      .catch((error) => {
        console.log("Detail", error);
      });
  }, [id]);

  useEffect(() => {
    const viewedProducts =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];

    if (products.main_upload_url) {
      let alreadyIncludes = false;

      for (let i = 0; i < viewedProducts.length; i++) {
        if (viewedProducts[i].product_id == id) {
          alreadyIncludes = true;
          break;
        }
      }

      if (alreadyIncludes) {
        return;
      }
      if (viewedProducts.length >= 3) {
        viewedProducts.pop();
        viewedProducts.unshift({
          product_id: id,
          main_upload_url: products.main_upload_url,
        });
      } else {
        viewedProducts.unshift({
          product_id: id,
          main_upload_url: products.main_upload_url,
        });
      }
    }

    localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
  }, [products]);

  console.log(products);
  return (
    
  <div className="px-0 tablet:px-8 w-full flex justify-center">
    <div className="w-full tablet:w-[1024px] desktop:w-[1280px]">
      <UserViewedProductsContainer />
      <div className="flex w-full my-10">
        <DetailSlick productMain={products} />
        <DetailContents productContent={products}/>
      </div>
      <DetailInfo productInfo={products} userInfo={users} salesInfo={salesProducts} />
      <Comment comment={comments}/>
      <ProductCardSlider
          data={catagoryProduct}
          title={`${users.user_nickname}님 이런 상품 어때요?`}
          settings={settings}
        />
    </div>
      
  </div>
)};

export default ProductDetail;
