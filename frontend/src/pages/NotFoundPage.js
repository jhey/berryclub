import React from 'react';

const NotFoundPage = () => (
    <>
    {/* <h1>404: Page Not Found</h1> */}
        <div class="rui-page-error container">
        <div class="row text-center">
            <div class="col-12"></div>
            <div class="col-12">
                <h1 class="mnb-30">404</h1>
                <p class="display-2 mb-50 text-grey-5">Page Not Found</p>
                <div>
                    <a href="/" class="btn btn-brand btn-long">Back Home</a>
                </div>
            </div>

        </div>
    </div>
    </>
);

export default NotFoundPage;