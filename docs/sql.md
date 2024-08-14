




# SQL Schema Diagram

## Entity-Relationship Diagram

```mermaid
erDiagram
    RESOURCES {
        INT id PK
        NVARCHAR(100) name
        NVARCHAR(255) address
        NVARCHAR(100) city
        NVARCHAR(20) postal_code
        NVARCHAR(100) country
        NVARCHAR(100) email
        NVARCHAR(20) phone
        NVARCHAR(10) signature_code
    }
    COMPANIES {
        INT id PK
        INT resource_id FK
        NVARCHAR(100) name
        NVARCHAR(255) address
        NVARCHAR(100) city
        NVARCHAR(20) postal_code
        NVARCHAR(100) country
        NVARCHAR(100) org
        NVARCHAR(100) vat
        NVARCHAR(100) bankgiro
        NVARCHAR(100) bic
        NVARCHAR(100) iban
        NVARCHAR(100) clearing
        NVARCHAR(100) konto
        NVARCHAR(10) kundnr
    }
    PROJECTS {
        INT id PK
        NVARCHAR(255) project_name
        INT company_id FK
        NVARCHAR(50) status
        DATETIME begin_date
        DATETIME end_date
        NVARCHAR(10) project_number
        NVARCHAR(MAX) notes
    }
    PRODUCTS {
        INT id PK
        NVARCHAR(10) code
        NVARCHAR(255) description
        DECIMAL(10, 2) hourly_rate
        DECIMAL(10, 2) unit_price
        INT vat_rate
        INT resource_id FK
        INT basemodel_id FK
        INT project_id FK
    }
    BUDGET {
        INT id PK
        INT product_id FK
        INT week_number
        DATETIME day_date
        DECIMAL(10, 2) quantity
    }
    INVOICES {
        INT id PK
        INT number
        INT project_id FK
        DATETIME invoice_date
        DATETIME due_date
        INT tax_rate
        INT due_interest_rate
        NVARCHAR(200) payment_terms
        BIT paid
    }
    INVOICE_LINES {
        INT id PK
        INT invoice_id FK
        INT product_id FK
        DATETIME work_date
        DECIMAL(10, 2) quantity
        DECIMAL(10, 2) actual_hourly_rate
        DECIMAL(10, 2) actual_unit_price
        NVARCHAR(255) description
    }
    RESOURCES ||--o{ COMPANIES: "resource_id"
    COMPANIES ||--o{ PROJECTS: "company_id"
    PROJECTS ||--o{ PRODUCTS: "project_id"
    RESOURCES ||--o{ PRODUCTS: "resource_id"
    COMPANIES ||--o{ PRODUCTS: "basemodel_id"
    PRODUCTS ||--o{ BUDGET: "product_id"
    PROJECTS ||--o{ INVOICES: "project_id"
    INVOICES ||--o{ INVOICE_LINES: "invoice_id"
    PRODUCTS ||--o{ INVOICE_LINES: "product_id"
```
















# Table Relationship Diagram

The following diagram illustrates the relationships between the tables in our database:

![Table Relationship Diagram](images/sqldiagram.png)


# T-SQL Code Example

This example demonstrates basic T-SQL operations such as creating a table, inserting data, and querying data.

    ```sql
    -- Create a new table named Employees
    CREATE TABLE Employees (
        EmployeeID INT PRIMARY KEY,
        FirstName NVARCHAR(50),
        LastName NVARCHAR(50),
        BirthDate DATE,
        Position NVARCHAR(50)
    );

    -- Insert data into the Employees table
    INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, Position)
    VALUES
    (1, 'John', 'Doe', '1980-01-15', 'Manager'),
    (2, 'Jane', 'Smith', '1985-05-22', 'Developer'),
    (3, 'Sam', 'Brown', '1990-10-30', 'Designer');

    -- Query data from the Employees table
    SELECT * FROM Employees;

    -- Update data in the Employees table
    UPDATE Employees
    SET Position = 'Senior Developer'
    WHERE EmployeeID = 2;

    -- Delete data from the Employees table
    DELETE FROM Employees
    WHERE EmployeeID = 3;

    -- Query data from the Employees table after updates
    SELECT * FROM Employees;