## Amazon MySQL Assignment for UCSD Bootcamp

### Initial Inventory Status
The starting point for the demonstration in this README. 
![Initial Inventory Status](/demo_images/inventory_initial.png)


### Demo 1: Succesful Order Purchase
We will be buying 50 of the first item in the database (Canon 5ds). The following image shows the purchase being placed and successfully processed. After the database is updated, the total is displayed (3999.99 * 50 = 199999.50). 
![Succesful Demo](/demo_images/demo_success.png)

The inventory after 50 units of item 1 are removed. (Reduced from 100 to 50).
![Inventory after succesful purchase](/demo_images/inventory_after_demo1.png)


### Demo 2: Insufficient Stock Handling
After Demo 1, stock is reduced to 50. In this demo, we will attempt to purchase 51 of that item, which will return an error to the customer. Database is not updated, so the inventory looks identical to how it was after Demo 1.
![Unsuccesful Demo](/demo_images/demo_2.png)
