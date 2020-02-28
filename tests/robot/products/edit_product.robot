*** Settings ***
Documentation     A test suite with a single test for edit product.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
Edit valid product
  Open Browser To Product Page
  ${random int}   Evaluate	random.randint(1, 10)	modules=random
  Click Element  //div[@class="page__content"]//tbody//tr[${random int}]//a
  Edit Product Page Should Be Open
  Press Keys	  product__name	    CTRL+a+BACKSPACE
  Input ProductName  product-edited
  Click Element   //button[@id="button-save-change"]
  Product Page Should Be Open
  Input Search Product    product-edited
  Click Element  //div[@class="page__content"]//tbody//a[contains(text(), "product-edited")]
  [Teardown]    Close Browser

Edit invalid product
  Open Browser To Product Page
  ${random int}   Evaluate	random.randint(1, 10)	modules=random
  Click Element  //div[@class="page__content"]//tbody//tr[${random int}]//a
  Edit Product Page Should Be Open
  Press Keys	  product__name	    CTRL+a+BACKSPACE
  Click Element   //button[@id="button-save-change"]
  Edit Product Page Should Be Open
  [Teardown]    Close Browser