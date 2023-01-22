const ListStates = () => {
    const status_ = {
        loader: false,
        statusData: {
            message: '',
            submessage: ''
        }
    }
    
    const link_ = {
        name: '',
        slug: '',
        depth: '',
        parentId: ''
    }

    const page_ = {
        title: '',
        linkId: '',
        content: '',
        postCategory: '',
        pageTemplate: ''
    }

    const link_validations = {
        name: { usename: 'Name', required: true, minLength: 6, maxLength: 20 },
        slug: { usename: 'Slug', required: true, minLength: 6, maxLength: 50 },
    };

    const page_validations = {
        title: { usename: 'Title', required: true, minLength: 6 },
    };
    
    return {
        status_,
        link_,
        link_validations,
        page_,
        page_validations,
    }
}
export default ListStates;