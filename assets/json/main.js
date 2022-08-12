const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
  currentIndex: 0,
  products: [
    {
      id: 1,
      images: "assets/img/SavedPictures/SavedPictures/anh001.jpg",
      title: "Men's short",
      description: "aaaa",
      price: "$7",
      product_code: "AB001",
      gender: "men",
    },
    {
      id: 2,
      images: "assets/img/SavedPictures/SavedPictures/anh002.jpg",
      title: "A men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB002",
      gender: "men",
    },
    {
      id: 3,
      images: "assets/img/SavedPictures/SavedPictures/anh003.jpg",
      title: "Women's skirts",
      description: "cccc",
      price: "$49",
      product_code: "AB003",
      gender: "women",
    },
    {
      id: 4,
      images: "assets/img/SavedPictures/SavedPictures/anh004.jpg",
      title: "Men's and women's winter shirts",
      description: "cccc",
      price: "$60",
      product_code: "AB004",
      gender: "men",
    },
    {
      id: 5,
      images: "assets/img/SavedPictures/SavedPictures/anh005.jpg",
      title: "A women's short-sleeved shirt",
      description: "cccc",
      price: "$21",
      product_code: "AB005",
      gender: "women",
    },
    {
      id: 6,
      images: "assets/img/SavedPictures/SavedPictures/anh006.jpg",
      title: "Women's two-day t-shirt",
      description: "cccc",
      price: "$28",
      product_code: "AB006",
      gender: "women",
    },
    {
      id: 7,
      images: "assets/img/SavedPictures/SavedPictures/anh007.jpg",
      title: "Man's jeans",
      description: "cccc",
      price: "$98",
      product_code: "AB007",
      gender: "men",
    },
    {
      id: 8,
      images: "assets/img/SavedPictures/SavedPictures/anh008.jpg",
      title: "A men's white plaid shirt",
      description: "cccc",
      price: "$48",
      product_code: "AB008",
      gender: "men",
    },
    {
      id: 9,
      images: "assets/img/SavedPictures/SavedPictures/anh009.jpg",
      title: "Men's jeans",
      description: "cccc",
      price: "$59",
      product_code: "AB009",
      gender: "men",
    },
    {
      id: 10,
      images: "assets/img/SavedPictures/SavedPictures/anh010.jpg",
      title: "Men's and women's red hoodies",
      description: "cccc",
      price: "$80",
      product_code: "AB010",
      gender: "women",
    },
    {
      id: 11,
      images: "assets/img/SavedPictures/SavedPictures/anh011.jpg",
      title: "Men's black striped long sleeve shirt",
      description: "cccc",
      price: "$96",
      product_code: "AB011",
      gender: "men",
    },
    {
      id: 12,
      images: "assets/img/SavedPictures/SavedPictures/anh012.jpg",
      title: "Women's short shirt",
      description: "cccc",
      price: "$34",
      product_code: "AB012",
      gender: "women",
    },
    {
      id: 13,
      images: "assets/img/SavedPictures/SavedPictures/anh013.jpg",
      title: "Women's 3-button blazer",
      description: "cccc",
      price: "$90",
      product_code: "AB013",
      gender: "women",
    },
    {
      id: 14,
      images: "assets/img/SavedPictures/SavedPictures/anh014.jpg",
      title: "Jeans for women",
      description: "cccc",
      price: "$20",
      product_code: "AB014",
      gender: "women",
    },
    {
      id: 15,
      images: "assets/img/SavedPictures/SavedPictures/anh015.jpg",
      title: "Men's pink plaid shirt",
      description: "cccc",
      price: "$65",
      product_code: "AB015",
      gender: "men",
    },
    {
      id: 16,
      images: "assets/img/SavedPictures/SavedPictures/anh016.jpg",
      title: "Men's pink plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB016",
      gender: "men",
    },
    {
      id: 17,
      images: "assets/img/SavedPictures/SavedPictures/anh017.jpg",
      title: "Men's thick coat",
      description: "cccc",
      price: "$98",
      product_code: "AB017",
      gender: "men",
    },
    {
      id: 18,
      images: "assets/img/SavedPictures/SavedPictures/anh018.jpg",
      title: "Men's Gucci shirt",
      description: "cccc",
      price: "$54",
      product_code: "AB018",
      gender: "men",
    },
    {
      id: 19,
      images: "assets/img/SavedPictures/SavedPictures/anh019.png",
      title: "Men's sports set",
      description: "cccc",
      price: "$12",
      product_code: "AB019",
      gender: "men",
    },
    {
      id: 20,
      images: "assets/img/SavedPictures/SavedPictures/anh020.jpg",
      title: "Adidas men's tank top",
      description: "cccc",
      price: "$14",
      product_code: "AB020",
      gender: "men",
    },
    {
      id: 21,
      images: "assets/img/SavedPictures/SavedPictures/anh021.jpg",
      title: "Women's tassel tops",
      description: "cccc",
      price: "$67",
      product_code: "AB021",
      gender: "women",
    },
    {
      id: 22,
      images: "assets/img/SavedPictures/SavedPictures/anh022.jpg",
      title: "Women's crop top",
      description: "cccc",
      price: "$33",
      product_code: "AB022",
      gender: "women",
    },
    {
      id: 23,
      images: "assets/img/SavedPictures/SavedPictures/anh023.jpg",
      title: "Women's floral skirt",
      description: "cccc",
      price: "$20",
      product_code: "AB023",
      gender: "women",
    },
    {
      id: 24,
      images: "assets/img/SavedPictures/SavedPictures/anh024.jpg",
      title: "Sweater (men/women)",
      description: "cccc",
      price: "$68",
      product_code: "AB024",
      gender: "women",
    },
    {
      id: 25,
      images: "assets/img/SavedPictures/SavedPictures/anh025.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB025",
      gender: "men",
    },
    {
      id: 26,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB026",
      gender: "men",
    },
    {
      id: 27,
      images: "assets/img/SavedPictures/SavedPictures/anh027.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB027",
      gender: "men",
    },
    {
      id: 28,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
      gender: "men",
    },
    {
      id: 29,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
      gender: "men",
    },
    {
      id: 30,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
      gender: "men",
    },
    {
      id: 31,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Men's plaid shirt",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
      gender: "men",
    },
  ],

  renderProduct: function () {
    const htmls = this.products.map((product) => {
      return `
            <div class="col-sm-3" >
                <div class="product">
                    <div class="product-img-info">
                        <a href="product-detail.html?id=${product.id}" class="product__link">
                            <img src="${product.images}" class="product__img" alt="">
                            <div class="product__sale">
                                SALE!
                            </div>
                        </a>
                        <div class="item-box-hover">
                            <div class="cart-wrap">
                                <i class="fas fa-shopping-cart"></i> ADD TO CART
                            </div>
                            <div class="box-inner v-center">
                                <a href="" class="box-inner__item wishlist">
                                    <i class="fas fa-heart"></i>
                                    <div class="icon-script">Add to Wishlist</div>
                                </a>
                                <a href="" class="box-inner__item compare">
                                    <i class="fas fa-random"></i>
                                    <div class="icon-script">Compare</div>

                                </a>
                                <a href="" class="box-inner__item view">
                                    <i class="fas fa-eye"></i>
                                    <div class="icon-script">Quick View</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="" class="product__name">${product.title}</a>
                    <div class="product__price">
                        <span class="old-price">${product.price}</span>
                    </div>
                    <div class="product__rating">
                        <i class="far fa-star fas fa-star--gold"></i>
                        <i class="far fa-star fas fa-star--gold"></i>
                        <i class="fas fa-star fas fa-star--gold"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
        </div>
        `;
    });
    $(".product--container").innerHTML = htmls.join("");
  },

  renderProduct2: function () {
    const productsList = this.products.map((item) => {
      // hiển thị theo men/women

      if (item.gender === "men") {
        return `
      <div class="col-xl-3 col-lg-4 col-md-4 col-12">
      <a href="product-detail.html?${item.id}">
      <div class="single-product">
          <div class="product-img">
              <div class="product-item">
                  <img class="default-img"
                      src="${item.images}"
                      alt="#">
                  
              </div>
              <div class="button-head">
                  <div class="button-head-item">
                      <div class="product-action">
                          <a title="Add to cart" href="#">Add to
                              cart</a>
                      </div>
                      <div class="product-action-2">
                          <a data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View" href="#"><i
                                  class="fa-solid fa-eye icon-feature"></i><span>Quick
                                  Shop</span></a>
                          <a title="Wishlist" href="#"><i class="fa-solid fa-heart icon-feature"></i><span>Add to
                                  Wishlist</span></a>
                          <a title="Compare" href="#"><i
                                  class="fa-solid fa-chart-simple icon-feature"></i><span>Add
                                  to Compare</span></a>
                      </div>
                  </div>
                  
                  
              </div>
          </div>
          <div class="product-content">
              <h3><a href="product-details.html">${item.title}</a></h3>
              <div class="product-price">
                  <span>${item.price}</span>
              </div>
          </div>
      </div>
      </a>
  </div>
      `;
      } else {
        return "";
      }
    });
    $(".product--content").innerHTML = productsList.join("");
  },

  showProductDetail: function (id) {},
  start: function () {
    this.renderProduct();
    this.renderProduct2();
    this.showProductDetail();
  },
};

app.start();
