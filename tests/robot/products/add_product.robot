*** Settings ***
Documentation     A test suite with a single test for add product.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
Can back products list
    Open Browser To Add Product Page
    Click Element   //button[@id="button-back-list"]
    Product Page Should Be Open
    [Teardown]    Close Browser
Add Product
    Open Browser To Add Product Page
    Input ProductName  productname1
    Input Price  123123
    Input PriceCost  123123
    Click Element   css:#product__price-unit .v-input
    Click Element   //div[@class="v-menu__content theme--light menuable__content__active"]//div[@role="listbox"][1]
    Click Element   //button[@id="button-create-new-product"]
    Product Page Should Be Open
Search New Product
    Input Search Product    productname1
    Page Should Contain Element     //td[contains(@class, 'text-start')]/a[contains(text(), 'productname1')]
    [Teardown]    Close Browser
