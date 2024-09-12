import { scroller } from 'react-scroll';

export function handleScroll(targetId, options = { smooth: true, duration: 500 }) {
    return function (e) {
        e.preventDefault();
        scroller.scrollTo(targetId, options);
    };
}


export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, value);
}

// get local storage
export const getLocalStorageItem = (key) => {
    const value = localStorage.getItem(key);
    return value;
};

// remove local storage
export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
};

export function getInitials(name) {
    const words = name.trim().split(" ");
    const initials = words.map(word => word[0].toUpperCase());

    return initials.join("");
}