import create from "zustand"

type ZustandState = {
  count: number
  incrementCount: () => void
  removeCount: () => void
  updateCount: (newCount: number) => void
}

export const useZustand = create<ZustandState>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set({ count: 0 }),
  updateCount: (newCount) => set(() => ({ count: newCount }))
}))
