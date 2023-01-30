const ListStates = () => {
    const status_ = {
        loader: false,
        statusData: {
            message: '',
            submessage: ''
        }
    }
    const image_init = {
        name: '',
        imgname: '',
        image: '',
        keycode: '',
        folderId: '',
        extension: '',
        description: '',
        redirect: '',
        imgLg: '',
        imgSm: '',
        imgTarget: '',
        width: '100',
        height: '100',
        imgdetails: {
            name: '',
            type: '',
            size: 0
        },
    }

    return {
        status_,
        image_init,
    }
}
export default ListStates;