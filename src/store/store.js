import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createCartSlice } from './cart-slice';

export const useStore = create(
  persist(
    immer((...a) => ({
      ...createCartSlice(...a),
    })),
    {
      name: 'cart-store',
    },
  ),
);
