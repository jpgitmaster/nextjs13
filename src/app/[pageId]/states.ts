const ListStates = () => {
    const status_ = {
        loader: false,
        statusData: {
            message: '',
            submessage: ''
        }
    }
    const page_init = {
        name: '',
        slug: '',
        page: {
            title: '',
            content: '',
            pageTemplate: '',
            postCategory: ''
        }
    }

    
    return {
        status_,
        page_init,
    }
}
export default ListStates;
