const addAction = (name) => {
    return {
        type: 'ADD',
        name: name,
        status: false,
    };
};

export {addAction};
