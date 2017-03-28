
1) Install *ghost-cloudinary-storage* from npm.
`npm install ghost-cloudinary-storage`

2)  Login to Cloudinary's [dashboard](https://cloudinary.com/console://) and grab your credentials.
![cloudinary account info](https://res.cloudinary.com/dtxk0ufbb/image/upload/v1490720682/wlmfdy7iovxj1kqoryhm.jpg)

3) Move the plugin in a folder where Ghost will find it.
`cp -r node_modules/ghost-cloudinary-storage content/storage/ghost-cloudinary-storage`

4) add a storage entry in your `config.js` file 

```
    database: {
     ...
    },

    storage: {
        active: 'ghost-cloudinary-store',
        'ghost-cloudinary-store': {
            secure: true, // to use https
            cloud_name: 'my_cloud_name',
            api_key: 'my_api_key',
            api_secret: 'my_api_secret'
        }
    }

```

5) Done, now when you upload an image from Ghost gui it will be hosted to your cloudinary account instead of locally.
