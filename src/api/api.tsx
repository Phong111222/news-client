export const API_URL = 'https://news-project-server.herokuapp.com';
export const API_CONFIG = {
    AUTH: {
        LOGINADMIN: `/api/v1/auth/authenticate`,
        GET_INFO: `/v1/admin/admins/yourself`
    },
    USER: {
        GET: `/api/v1/users`,
        EDIT: (id: number) => `/v1/admin/users/${id}`,
        BANNER: (id: number) => `/api/v1/users/block/${id}`,
        ACTIVE: (id: number) => `/api/v1/users/active/${id}`,

    },
    ADMIN: {
        GET: `/v1/admin/admins`,
        EDIT: (id: number) => `/v1/admin/admins/${id}`
    },
    CATEGORY: {
        GET: `/api/v1/categories`,
        GETDETAIL: (id: number) => `/v1/categories/${id}/products`,
        EDIT: (id: number) => `/api/v1/categories/${id}`,
        DELETE: (id: number) => `/api/v1/categories/${id}`,
        CREATE: `/api/v1/categories`,
        ACTIVE: (id: number) => `/api/v1/categories/active/${id}`,

    },

    NEWS: {
        GET: `/api/v1/reader/posts`,
        GETDETAIL: (id: number) => `/api/v1/posts/${id}`,
        EDIT: (id: number) => `/api/v1/posts/${id}`,
        DELETE: (id: number) => `/api/v1/admin/posts/${id}`,
        USER_DELETE: (id: number) => `/api/v1/user/posts/${id}`,
        CREATE: `/api/v1/posts`,
        ACTIVE: (id: number) => `/api/v1/posts/admin/toggle/${id}`,
        VIEW: (id: number) => `/api/v1/posts/views/${id}`,
        TOP: `/api/v1/reader/posts/top`
    },


}