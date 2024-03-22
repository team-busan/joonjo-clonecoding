export const User = [
  {
    user_id: 1,
    user_nickname: "test",
    user_age: "20",
    user_profile: "https://source.unsplash.com/random/100x100",
  },
];

/*
  type 0 = 직거래, 1 = 택배거래, 2 = 직거래,택배거래
  sales_status 0 = 판매중, 1 = 판매완료
*/

export const Products = [
  {
    product_id: 1,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "닌텐도 스위치",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 2,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "빔 프로젝터",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 3,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "c언어",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 4,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 5,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "닌텐도 스위치",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 6,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "닌텐도 스위치",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 7,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "닌텐도 스위치",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 8,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "닌텐도 스위치",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 9,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test 팝니다",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 10,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 11,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test 팝니다",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 12,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 13,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test 팝니다",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 14,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 15,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test 팝니다",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 16,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 17,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test 팝니다",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 18,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100,
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 19,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random",
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test 팝니다",
    content: "새상품 입니다",
    write_date_time: Date.now(),
    view_count: 10,
    price: 10000,
    main_category: "의류",
    sub_category: "상의",
    product_status: "중고", // 상품 상태 (중고 or 새상품)
    type: 0, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
  {
    product_id: 20,
    user_id: 1,
    main_upload_url: "https://source.unsplash.com/random", //상품 이미지
    sub_upload_url: "https://source.unsplash.com/random",
    title: "test2 팝니다",
    content: "새상품2 입니다",
    write_date_time: Date.now(),
    view_count: 100, // 조회수
    price: 100000,
    main_category: "전자기기",
    sub_category: "핸드폰",
    product_status: "새상품", // 상품 상태 (중고 or 새상품)
    type: 1, // 직거래 or 택배거래
    sales_status: 0, // 판매중 or 판매완료
  },
];

export const Bookmarks = [
  {
    user_id: 1,
    product_id: 1,
  },
];

export const Comments = [
  {
    comment_id: 1,
    product_id: 1,
    user_id: 1,
    comment_content: "댓글1",
    write_date_time: Date.now(),
  },
];
