const { createApp } = Vue;
createApp({
  data() {
    return {
      produits: [],
    };
  },
  mounted() {
    axios
      .get("produit.json")
      .then((response) => (this.produits = response.data.produits));
  },
}).mount("#app");
