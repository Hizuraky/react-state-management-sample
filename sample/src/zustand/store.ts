import create from "zustand"

type ZustandState = {
  zustandCount: number
  incrementZustandCount: () => void
  removeZustandCount: () => void
  updateZustandCount: (newCount: number) => void
}

export const useZustandStore = create<ZustandState>((set) => ({
  zustandCount: 0,
  incrementZustandCount: () => set((state) => ({ zustandCount: state.zustandCount + 1 })),
  removeZustandCount: () => set({ zustandCount: 0 }),
  updateZustandCount: (newCount) => set(() => ({ zustandCount: newCount }))
}))
