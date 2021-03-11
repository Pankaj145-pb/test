import React from 'react';

const ImageList = (props) => {
    const imagelist = props.images.map((Image) => {
        return <img key={Image.id} src={Image.urls.regular} />
    })
    return(
        <div>
            <div>
                <h1>Images List</h1>
                {imagelist}
                <hr/>
            </div>
        </div>
    )
}
export default ImageList;