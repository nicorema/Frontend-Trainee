class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imgUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderRootId, shouldRender = true) {
    this.renderRootId = renderRootId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses && cssClasses.length > 0) {
      for (const className of cssClasses) {
        rootElement.classList.add(className);
      }
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.renderRootId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  constructor(renderRootId) {
    super(renderRootId, false);

    this.orderProducts = () => {
      console.log('Ordering');
      console.log(this.items);
    };

    this.render();
  }

  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const totalPrice = this.items.reduce(
      (prevVal, currentitem) => prevVal + currentitem.price,
      0
    );
    return totalPrice;
  }
  addProduct(product) {
    const updtadedItems = [...this.items];
    updtadedItems.push(product);
    this.cartItems = updtadedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', ['cart']);
    cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
    const orderBtn = cartEl.querySelector('button');
    // orderBtn.addEventListener('click',()=>this.orderProducts());
    orderBtn.addEventListener('click', this.orderProducts);
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component {
  constructor(product, renderRootId) {
    super(renderRootId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', ['product-item']);
    prodEl.innerHTML = `
    <div>
        <img src="${this.product.imgUrl}" alt="${this.product.title}"
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
        </div>
    </div>
    `;
    const addCartBtn = prodEl.querySelector('button');
    addCartBtn.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  #products = [];
  constructor(renderRootId) {
    super(renderRootId,false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        'A Pillow',
        'https://imgprod65.hobbylobby.com/2/4d/33/24d332b8e5b02900080b14033b1c07b27a935dd1/350Wx350H-1880152-1019.jpg',
        19.99,
        'A soft pillow!'
      ),
      new Product(
        'A Carpet',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmPNRU2uXysEdim7Gj5XqQDNlwrpp10LmNwm6cJaWxOhLcSCRn&usqp=CAU',
        89.99,
        'A carpet which you might like - or not.'
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, 'prod-list');
    }
  }
  render() {
    this.createRootElement(
      'ul',
      ['product-list'],
      [new ElementAttribute('id', 'prod-list')]
    );

    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop extends Component {
  constructor() {
    super();
  }

  render() {
    const renderRoot = document.getElementById('app');

    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
