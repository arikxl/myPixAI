import React, { useEffect } from 'react';

const FacebookShareBtn = ({url}) => {
    useEffect(() => {
        // Load the SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Initialize the SDK with your App ID
        window.fbAsyncInit = function () {
            FB.init({
                appId: 1399144610849103,
                xfbml: true,
                version: 'v9.0'
            });
        };
    }, []);

    const handleClick = () => {
        // Open the Share Dialog
        FB.ui({
            method: 'feed',
            link: url,
            description: 'This image was created in myPix app',
            caption: 'This image was created in myPix app',

        }, function (response) { });
    }

    return (
        <button id="share-button" onClick={handleClick}>Share on Facebook</button>
    );
}

export default FacebookShareBtn;