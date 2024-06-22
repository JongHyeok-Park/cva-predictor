import { create } from 'zustand'

const useAddressStore = create((set) => ({
  address: null,
  setAddress: (newAddress) => set({ address: newAddress }),
}))

export default useAddressStore;