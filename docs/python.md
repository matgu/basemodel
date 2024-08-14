
# Handy Python packages

## Requirements
    ## pip install -r requirements.txt
    sqlalchemy
    pyodbc
    pandas
    openpyxl
    ifcopenshell
    pydanic
    fastapi
    SQLModel


## Other Requirements
    mako
    mkdocs
    mkdocs-material
    fitz 

## Python Code Example

This example demonstrates how to read data from an Excel file, manipulate the data, and store the results in a SQL database using `pandas` and `SQLAlchemy`.

    ```python
    # Import necessary libraries
    import pandas as pd
    from sqlalchemy import create_engine

    # Step 1: Read data from an Excel file
    # Replace 'your_excel_file.xlsx' with the path to your actual Excel file
    excel_file_path = 'your_excel_file.xlsx'
    df = pd.read_excel(excel_file_path, sheet_name='Sheet1')

    # Display the first few rows of the dataframe
    print("Data from Excel file:")
    print(df.head())

    # Step 2: Manipulate the data
    # For example, let's add a new column that is the sum of two existing columns
    df['Total'] = df['Column1'] + df['Column2']

    # Display the modified dataframe
    print("\nModified DataFrame:")
    print(df.head())

    # Step 3: Store the results in a SQL database
    # Replace 'sqlite:///your_database.db' with the connection string for your actual database
    database_connection_string = 'sqlite:///your_database.db'
    engine = create_engine(database_connection_string)

    # Write the dataframe to a SQL table
    df.to_sql('your_table_name', con=engine, if_exists='replace', index=False)

    print("\nData has been written to the SQL database.")
    ```