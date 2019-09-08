let initData = {
    data: [
        {
            name: 'Go to the office',
            status: true,
        },
        {
            name: 'Prepare tasks for today',
            status: false,
        },
        {
            name: 'Team meeting',
            status: false,
        },
        {
            name: 'Commit tasks changed',
            status: false,
        },
    ],
};


const homeReducer = (state = initData, action) => {
    let newData = state.data;
    switch (action.type) {
        case 'ADD':
            return {...state, data: [...state.data, {name: action.name, status: action.status}]};
        case 'FINISH':
            newData[action.value].status = true;
            return {...state, data: newData};
        case 'DELETE':
            newData = newData.filter((item, index) => index !== action.value);
            return {...state, data: newData};
        case 'EDIT_SUCCESS':
            newData[action.index].name = action.name;
            return {...state, data: newData};
        default:
            return state;
    }
};


export default homeReducer;
