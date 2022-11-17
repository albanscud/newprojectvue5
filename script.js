const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });






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
