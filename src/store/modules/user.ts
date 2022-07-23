export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: 'test'
        }
    },
    getters: {
        fullName: state => {
            return `full ${state.name}`
        }
    },
    actions: {},
    // persist:true,   全局持久化
    persist: {
        key: 'user',
        // storage: sessionStorage, // 数据存储位置，默认为 localStorage
        paths: ['name'] // 用于部分持久化状态的点表示法路径数组
    }
})
