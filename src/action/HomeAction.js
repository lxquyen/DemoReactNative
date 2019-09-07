const finishAction = (index) => {
    return {
        type: 'FINISH',
        value: index,
    };
};

const deleteAction = (index) => {
    return {
        type: 'DELETE',
        value: index,
    };
};

const editSuccessAction = (name, index) => {
    return {
        type: 'EDIT_SUCCESS',
        name: name,
        index: index,
    };
};

export {finishAction, deleteAction, editSuccessAction};
