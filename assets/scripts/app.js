const productList = {
  products: [
    {
      title: 'A pillow',
      imageUrl:
        'https://www.serta.com/sites/ssb/serta.com/uploads/2018/accessories/pillows/Cool%20Comfy%20Queen/CoolComfy1.jpg',
      price: 19.99,
      description: 'A soft pillow',
    },
    {
      title: 'A carpet',
      imageUrl:
        'https://ii1.pepperfry.com/media/catalog/product/s/a/568x625/saral-home-soft-cotton-tufted-saggy-floor-carpet--90x150-cm-saral-home-soft-cotton-tufted-saggy-floo-od9xkw.jpg',
      price: 89.99,
      description: 'A carpet which you might like - or not',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src='${prod.imageUrl}' alt='${prod.title}'>
        <div class='product-item__content'>
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      
    `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
