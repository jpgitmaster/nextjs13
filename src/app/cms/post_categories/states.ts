const ListStates = () => {
    const status_ = {
        loader: false,
        statusData: {
            message: '',
            submessage: ''
        }
    }
    const categories_init = {
        data: [],
        total: 0
    }

    const category_init = {
        name: '',
        title: '',
        code: '',
        description: '',   
    }

    const category_validations = {
        name: { usename: 'Category Name', required: true, minLength: 4, maxLength: 20 },
        code: { usename: 'Code', required: true, minLength: 4, maxLength: 50 },
    };

    const post_init = {
        categoryId: '',
        title: '',
        content: '',
        imagecode: '',
    }
    const post_validations = {
        title: { usename: 'Title', required: true, minLength: 2, maxLength: 50 },
    };

    return {
        status_,
        categories_init,
        category_init,
        category_validations,
        post_init,
        post_validations,
    }
}
export default ListStates;