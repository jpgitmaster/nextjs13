const ListStates = () => {
    const status_ = {
        loader: false,
        statusData: {
            message: '',
            submessage: ''
        }
    }
    const links_init = {
        links_arr: [],
        links_total: 0,
    }

    const link_init = {
        name: '',
        slug: '',
        depth: '',
        parentId: ''
    }

    const page_init = {
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
        linkId: { usename: 'Link', required: true },
    };
    
    return {
        status_,
        links_init,
        link_init,
        link_validations,
        page_init,
        page_validations,
    }
}
export default ListStates;