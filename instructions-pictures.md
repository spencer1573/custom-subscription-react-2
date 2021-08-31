# change pictures instructions

0. pull latest theme

```
shopify theme pull
```

1. find the picture
2. open narwal, put the picture in assets

3. go to `templates/page.subscriptions.liquid

put an image tag with source
<img src="{{ 'name-of-image-file-with.extension' | asset_url }}">

4. cd into narwal - and

```
cd narwal_theme_2
```

```
shopify theme push

```

5. get cdn picture name

go to <set domain for store>/pages/subscriptions

look at source for picture

6. go to `constants/constants`

change the `imgSrc` to the desired cdn
