import api from "../utlis/api";

function getAllPosts() {
    return api.get('/posts').then(res => res.data).catch(err => Promise.reject(err));
}

function getAllUsers() {
    return api.get('/users').then(res => res.data).catch(err => Promise.reject(err));
}

export {
    getAllPosts,
    getAllUsers
}