import { create } from 'zustand'

const useLatLngStore = create((set) => ({
  latLng: {
    lat: 128.604702568416,
    lng: 35.8662511316347
  },
  setLatLng: (newLat, newLng) => set({ lat: newLat, lng: newLng }),
}))

export default useLatLngStore;