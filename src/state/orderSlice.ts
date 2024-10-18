import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  material: string;
  status: string;
  fileUrl: string;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  createOrderStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  createOrderStatus: 'idle',
  error: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    startCreateOrder: (state) => {
      state.createOrderStatus = 'loading';
      state.error = null;
    },
    createOrderSuccess: (state) => {
      state.createOrderStatus = 'succeeded';
    },
    createOrderFailure: (state, action: PayloadAction<string>) => {
      state.createOrderStatus = 'failed';
      state.error = action.payload;
    },
    resetCreateOrderStatus: (state) => {
      state.createOrderStatus = 'idle';
      state.error = null;
    },
  },
});

export const {
  addOrder,
  startCreateOrder,
  createOrderSuccess,
  createOrderFailure,
  resetCreateOrderStatus,
} = orderSlice.actions;

export default orderSlice.reducer;
