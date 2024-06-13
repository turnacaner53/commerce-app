const initialState = {
  cartItems: [],
};

export const createCartSlice = (set) => ({
  ...initialState,
  addToCart: (product) => {
    set((state) => {
      state.cartItems.push(product);
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    });
  },

  clearCart: () => {
    set((state) => {
      state.cartItems = [];
    });
  },
});
