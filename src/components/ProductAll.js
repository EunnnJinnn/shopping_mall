import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  // 버티컬 2개(||) = or  : ||(얘가 아니더라도) ""(얘가 된다면 실행해라)
  const searchQuery = query.get("q") || "";
  console.log(searchQuery);
  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/EunnJinnn/shopping_mall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
    // 리렌더링 : [query]
  }, [query]); 
  return (
    <Container>
      <Row>
        {productList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
