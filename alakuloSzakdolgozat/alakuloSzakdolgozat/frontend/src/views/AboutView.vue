<template>
  <div>
    <div
      v-for="product in products"
      :key="product._id"
      @click="reszletek(product._id)"
      class="grid"
    >
      <article class="card product-item">
        <header class="card__header">
          <h1 class="product__title">{{ product.title }}</h1>
        </header>
        <div class="card__image">
          <img :src="product.imageUrl" alt="" />
        </div>
        <div class="card__content">
          <h2 class="product__price">{{ product.price }} Ft</h2>
          <p class="product__description">{{ product.description }}</p>
        </div>
        <div class="card__actions">
          <a
            href=""
            onclick="alert('A vásárláshoz kérlek jelentkezz be!')"
            class="btn"
            >Megveszem</a
          >
        </div>
      </article>
    </div>
  </div>
</template>
<style>
/* .card {
  display: block!important;
  float:left;
  margin: 15px;
  }
  .card-body {
    height: 250px;
  } */

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  float: left;
}
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.card__header,
.card__content {
  padding: 1rem;
}

.card__header h1,
.card__content h1,
.card__content h2,
.card__content p {
  margin: 0;
}

.card__image {
  width: 100%;
}

.card__image img {
  width: 150px;
  height: 150px;
}

.card__actions {
  padding: 1rem;
  text-align: center;
}

.card__actions button,
.card__actions a {
  margin: 0 0.25rem;
}

.btn {
  display: inline-block;
  padding: 0.25rem 1rem;
  text-decoration: none;
  font: inherit;
  border: 1px solid #00695c;
  color: #00695c;
  background: white;
  border-radius: 3px;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: #00695c;
  color: white;
}

.btn.danger {
  color: red;
  border-color: red;
}

.btn.danger:hover,
.btn.danger:active {
  background: red;
  color: white;
}

@media (min-width: 768px) {
  .main-header__nav {
    display: flex;
  }

  #side-menu-toggle {
    display: none;
  }
}

.product-form {
  width: 20rem;
  max-width: 90%;
  margin: auto;
  display: block;
}

.product-item {
  width: 20rem !important;
  max-width: 95% !important;
  margin: 1rem !important;
  color: none !important;
}

.product__title {
  font-size: 1.2rem;
  text-align: center;
}

.product__price {
  text-align: center;
  color: #4d4d4d;
  margin-bottom: 0.5rem;
}

.product__description {
  text-align: center;
}
</style>
<script>
import DataService from "../services/dataservice";

export default {
  name: "HomeView",
  components: {},
  data() {
    // NEW - initialize the event object
    return {
      products: {},
    };
  },
  mounted() {
    DataService.getProductsById().then((resp) => {
      this.products = resp;
      //console.log(this.products);
    });
  },
  // NEW
};

// @ is an alias to /src
</script>

