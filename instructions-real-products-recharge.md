# instructions for real products for reacharge

0. add a product
   with variants if you want

1. add info for shopify payemnts and set it to test mode

2. add recharge

apps > customize your store (top right)

search recharge

add app

remember you must have the code from narwal_theme_2 or recharge won't work

3.  set up recharge

add a product

add frequecies

4. test product in cart

- catalog > product put in > checkout

for fake payment

look up how to do fake payments with shopify payemnts test mode

424242424

5. get the variant id

products > first product

click on the variant from the admin - look at the url

it says variants/<number of variant>

and put it in roasts constant

go to `constants/constants`

populate the `value` attribute in roasts with the variant_id

6. get the seller plan ids

go to catalog page

open network tab

select preserve log

add to cart for xx days

in the network it should be the `add.js` xhr request

and you'll see `selling_id` i think

if that network thing is not coming through

<script>
    console.log('Product', {{ product | json }})
  </script>

and put that in constants
