import axios from "axios";


const baseUrl = "https://5dd14f8d15bbc2001448d07d.mockapi.io";
const createUrl = "https://5dd14f8d15bbc2001448d07d.mockapi.io"


export function getProductList() {
    return axios.get(`${baseUrl}/products/`);
}

export function getProduct(productId) {
    return axios.get(`${baseUrl}/products/${productId}`);
}

export function deleteProduct(productId) {
    return axios.delete(`${baseUrl}/products/${productId}`);
}

export function createProduct(product) {
    return axios.post(`${createUrl}/products/`, product);
}

